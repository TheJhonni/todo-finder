import { useAnimations } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Jellyfish(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, "./scene.gltf");

  const { actions } = useAnimations(gltf.animations[0], group);
  useEffect(() => {
    console.log(actions.AnimationAction);
    // actions.AnimationAction.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive position={[4, 0, 0]} object={gltf.scene} scale={0.8} />
    </group>
  );
}
