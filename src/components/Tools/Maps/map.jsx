import React, { useState, useEffect } from "react";
import { View as RNView, ActivityIndicator, Text, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const Maps = () => {
  const [region, setRegion] = useState({
    latitude: 39.904241,
    longitude: 139.060147,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let intervalId;

    const fetchLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setError("Permission to access location was denied");
          setLoading(false);
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLocation();
    intervalId = setInterval(fetchLocation, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <RNView
      style={{
        width: "100%",
        height: 520,
      }}
    >
      <MapView style={{ flex: 1, borderRadius: 10 }} region={region}>
        {/* Custom Marker with a circular image */}
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        >
          <Image
            source={{
              uri: "https://i.postimg.cc/0yVPDr0C/temp-Image7-DJHEb.avif",
            }}
            title="Current Location"
            description="Current Location"
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "orange",
            }}
          />
        </Marker>
      </MapView>
    </RNView>
  );
};

export default Maps;
