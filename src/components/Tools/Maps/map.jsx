import React, { useState, useEffect, useRef } from "react";
import {
  View as RNView,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";
import styles from "./map.style";
import { useShops, useMenuItems } from "../../../hooks/HookApi";
import { Picker } from "@react-native-picker/picker"; // Ensure correct import
import { useNavigation } from "@react-navigation/native";

const Maps = () => {
  const navigation = useNavigation();
  const { shops, loading, error } = useShops();
  const [region, setRegion] = useState({
    latitude: 35.6585805,
    longitude: 139.7454329,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });
  const [currentLocation, setCurrentLocation] = useState(null);
  const [range, setRange] = useState("50");
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchCurrentLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      const newLocation = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      };
      setCurrentLocation(newLocation);
      setRegion(newLocation);
    };

    fetchCurrentLocation();
  }, []);

  const resetLocation = async () => {
    if (currentLocation) {
      mapRef.current.animateToRegion(
        {
          ...currentLocation,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        },
        1000
      );
    }
  };

  const onRangeChange = (itemValue) => {
    setRange(itemValue);
    const zoomLevel = 0.001 + itemValue / 50000;
    setRegion((prevRegion) => ({
      ...prevRegion,
      latitudeDelta: zoomLevel,
      longitudeDelta: zoomLevel,
    }));
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3;
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

  const filteredShops = shops.filter((shop) => {
    if (!currentLocation) return false;
    const distance = calculateDistance(
      currentLocation.latitude,
      currentLocation.longitude,
      shop.lat,
      shop.long
    );
    return distance <= parseInt(range);
  });

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <RNView style={{ width: "100%", height: "100%" }}>
      <MapView ref={mapRef} style={styles.mapview} region={region}>
        {currentLocation && (
          <Marker coordinate={currentLocation}>
            <View style={styles.marker} />
          </Marker>
        )}
        {filteredShops.map((shop) => (
          <Marker
            key={shop.shopid}
            coordinate={{ latitude: shop.lat, longitude: shop.long }}
            title={shop.shopname}
          >
            <Image
              source={{
                uri: "https://i.postimg.cc/YSCYYDY4/coffee-shop-store-market-restaurant-24911-11058-jpg.avif",
              }}
              style={styles.markershop}
            />
            <Callout
              onPress={() =>
                navigation.navigate("Menu", { shopid: shop.shopid })
              }
              style={styles.callout}
            >
              <Text>{shop.shopname}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View style={styles.picker}>
        <Picker
          selectedValue={range}
          style={styles.pickerButton}
          onValueChange={onRangeChange}
        >
          <Picker.Item label="0.5 km" value="500" />
          <Picker.Item label="1 km" value="1000" />
          <Picker.Item label="2 km" value="2000" />
          <Picker.Item label="5 km" value="5000" />
        </Picker>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={resetLocation}>
          <Image
            source={{
              uri: "https://i.postimg.cc/kMHQdVTR/temp-Image-Twk1-K3.avif",
            }}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
    </RNView>
  );
};

export default Maps;
