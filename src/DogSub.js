import { Center, Modal } from "native-base";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";

export default function DogSub(props) {
  const { showModal, onHide, endPoint } = props;
  let title = endPoint.toUpperCase();
  const [dog, setDog] = useState([]);

  useEffect(() => {
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
        <Modal.Header>
          <Text fontSize={23} fontWeight="bold" color="white" py={2}>
            {title.toUpperCase()}
          </Text>
        </Modal.Header>
        {/* MAIN MAIN MAIN */}
        {dog.length < 1 ? (
          <Modal.Body>
            <Center>{`Anjing ${endPoint} hanya satu jenis...`}</Center>
          </Modal.Body>
        ) : (
          // LIST LIST LIST
          <Modal.Body>{dog}</Modal.Body>
        )}
      </Modal.Content>
    </Modal>
  );
}
