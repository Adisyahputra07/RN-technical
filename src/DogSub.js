import { Button, Modal } from "native-base";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function DogSub(props) {
  const { showModal, onHide, endPoint } = props;
  const [dog, setDog] = useState([]);

  useEffect(() => {
    // fetch(`https://dog.ceo/api/breed/australian/list`)
    console.log("ini item", endPoint);

    endPoint === ""
      ? null
      : fetch(`https://dog.ceo/api/breed/${endPoint}/list`)
          .then((response) => response.json())
          .then((json) => setDog(json.message));
  }, [endPoint]);

  console.log(dog);

  return (
    <Modal isOpen={showModal} onClose={() => onHide()}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>{endPoint}</Modal.Header>
        {dog.length < 1 ? (
          <Modal.Body>{`Anjing ${endPoint} hanya satu jenis`}</Modal.Body>
        ) : (
          <Modal.Body>{dog}</Modal.Body>
        )}
      </Modal.Content>
    </Modal>
  );
}
