import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {
  return (
    <MapContainer center={[30.29128, -97.73858]} zoom={13} scrollWheelZoom={false} style={{ height: '800px', width: '90%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Marker for Ithaca */}
      <Marker position={[38.3643, 20.7233]}>
        <Popup>
          Ithaca, the home of Odysseus. <br /> "And his heart was clouded with care as he looked out over the barren water." - Book 5
        </Popup>
      </Marker>
      {/* Marker for Troy */}
      <Marker position={[39.9573, 26.2389]}>
        <Popup>
          Troy, the famous site of the Trojan War. <br /> "The wind that carried west from Ilion brought me to Ismaros, in the land of the Cicones." - Book 9
        </Popup>
      </Marker>
      {/* Marker for Pylos */}
      <Marker position={[36.9147, 21.6964]}>
        <Popup>
          Pylos, Kingdom of King Nestor. <br /> "We reached Pylos, the well-built citadel of Neleus." - Book 3
        </Popup>
      </Marker>
      {/* Marker for Sparta */}
      <Marker position={[37.0738, 22.4291]}>
        <Popup>
          Sparta, realm of King Menelaus and Queen Helen. <br /> "Menelaus, in fair Lacedaemon, was a guest." - Book 4
        </Popup>
      </Marker>
      {/* Marker for Ogygia */}
      <Marker position={[35.8889, 14.4477]}>
        <Popup>
          Ogygia, the island of the nymph Calypso who detained Odysseus. <br /> "I am stuck here on this island. The sea is all around me, a sea from which there is no release." - Book 5
        </Popup>
      </Marker>
      {/* Marker for Isle of the Lotus Eaters */}
      <Marker position={[33.909, 10.8555]}>
        <Popup>
          Isle of the Lotus Eaters, where Odysseus's crew forgot their home. <br /> "They ate the fruit of the lotus and forgot their wish to return." - Book 9
        </Popup>
      </Marker>
      {/* Marker for Aeolia */}
      <Marker position={[38.4676, 14.9540]}>
        <Popup>
          Aeolia, island of Aeolus, keeper of the winds. <br /> "Then we reached the island of Aeolus, where the wind king keeps the swirling winds." - Book 10
        </Popup>
      </Marker>
      {/* Marker for Circe’s Island */}
      <Marker position={[41.2311, 13.0886]}>
        <Popup>
          Aeaea, home of the enchantress Circe. <br /> "We reached the island Aeaea; here Circe, a formidable goddess with human speech, had her home." - Book 10
        </Popup>
      </Marker>
      {/* Marker for the Underworld Entrance */}
      <Marker position={[39.2384, 20.5043]}>
        <Popup>
          Entrance to the Underworld. <br /> "To the Ocean River’s boundaries we came, where are the Cimmerian folk, enshrouded in mist and cloud." - Book 11
        </Popup>
      </Marker>
      {/* Markers for Scylla and Charybdis */}
      <Marker position={[38.2527, 15.7144]}>
        <Popup>
          Scylla, a monstrous threat on one side of a narrow channel. <br /> "No seaman’s shout can reach his fellows through that blackness." - Book 12
        </Popup>
      </Marker>
      <Marker position={[38.2675, 15.2211]}>
        <Popup>
          Charybdis, the whirlpool opposite Scylla. <br /> "Thrice from dawn to dusk she spews it up and thrice she sucks it down, that terror!" - Book 12
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
