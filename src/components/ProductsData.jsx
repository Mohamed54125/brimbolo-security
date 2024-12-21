import ccctvcam from "../image/security-cctv-camera-500x500.webp";
import alarmsys from "../image/smart-alarm-systems-statistics.webp";
import smartlocj from "../image/mt620-waterpoof-smart-lock-black-401_580x.webp";
import MotionSensor from "../image/3-s2.0-B9780128236949000190-f08-05-9780128236949.jpg";
import drone from "../image/drone.jpg";
import finr from "../image/fin.jpg";
import cam from "../image/cam.jpg";
import smartv from "../image/smartv.webp";
import outdoor from "../image/outdoor.jpg";
import smoke from "../image/smoke.webp";
import garag from "../image/garag.jpeg";
import hup from "../image/hup.png";
import camme from "../image/camme.jpg";
import vid from "../image/vid.jpg";
import seccc from "../image/seccc.jpg";
import "./why.css";

let products = [
  {
    id: 1,
    name: "CCTV Camera",
    price: "$150",
    description: "High-definition security camera for monitoring.",
    image: ccctvcam,
  },
  {
    id: 2,
    name: "Alarm System",
    price: "$99",
    description: "Advanced alarm system for home security.",
    image: alarmsys,
  },
  {
    id: 3,
    name: "Smart Lock",
    price: "$120",
    description: "Smart lock with remote access and monitoring.",
    image: smartlocj,
  },
  {
    id: 4,
    name: "Motion Sensor",
    price: "$75",
    description: "Motion detection sensor with instant alerts.",
    image: MotionSensor,
  },
  {
    id: 5,
    name: "Fingerprint Door Lock",
    price: "$199",
    description: "Advanced biometric fingerprint security lock for doors.",
    image: finr,
  },
  {
    id: 6,
    name: "Security Drone",
    price: "$500",
    description: "Automated drone for aerial surveillance and monitoring.",
    image: drone,
  },
  {
    id: 7,
    name: "Wireless Security Camera",
    price: "$180",
    description:
      "Wireless camera with mobile app connectivity and cloud storage.",
    image: cam,
  },
  {
    id: 8,
    name: "Smart Doorbell",
    price: "$130",
    description:
      "Smart video doorbell with two-way audio and motion detection.",
    image: smartv,
  },
  {
    id: 9,
    name: "Outdoor Flood Light Camera",
    price: "$250",
    description: "High-brightness flood light with integrated security camera.",
    image: outdoor,
  },
  {
    id: 10,
    name: "Smoke Detector",
    price: "$50",
    description: "Smoke and fire detection system with mobile alerts.",
    image: smoke,
  },
  {
    id: 11,
    name: "Garage Door Opener",
    price: "$150",
    description: "Automated garage door opener with remote access.",
    image: garag,
  },
  {
    id: 12,
    name: "Smart Home Hub",
    price: "$250",
    description: "Centralized hub for controlling all your smart home devices.",
    image: hup,
  },
  {
    id: 13,
    name: "Pet Surveillance Camera",
    price: "$120",
    description: "Monitor your pets when you're away with this smart camera.",
    image: camme,
  },
  {
    id: 14,
    name: "Video Door Lock",
    price: "$220",
    description: "Video door lock with remote access and monitoring.",
    image: vid,
  },
  {
    id: 15,
    name: "Security Smart Bulb",
    price: "$50",
    description: "Smart security light bulb with motion detection.",
    image: seccc,
  },
];
export default products;
