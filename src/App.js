import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {
  return (
    <div>
      <h2>CC FINAL PROJECT</h2>
      <div>If you click on a location and it loads off the screen, click out of it and click back on it! </div>
      <MapContainer center={[38.3643, 20.7233]} zoom={5} scrollWheelZoom={false} style={{ height: '900px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Marker for Ithaca */}
        <Marker position={[38.3643, 20.7233]}>
          <Popup style="font-size: 11px;">
            Ithaca<br />
            “I am Odysseus, Laertes’ son, known for my many clever tricks and lies. My fame extends to heaven, but I live in Ithaca, where shaking forest hides Mount Neriton. Close by are other islands: Dulichium, and wooded Zacynthus and Same. All the others face the dawn; my Ithaca is set apart, most distant, facing the dark. It is a rugged land, but good at raising children. To my eyes no country could be sweeter. Lines 20-30 in book 9” <br /><br />
            Description:<br />
            Ithaca is a remote island in the Ionian Sea. It is the kingdom where Odysseus was born and is very significant to the story in the Odyssey because it is his home. It is the place that Odysseus wants to return to. Ithaca is a beautiful place with a rocky landscape and is isolated position in the middle of the sea. This place reflects the arduous journey that Odysseus must have to go through to reclaim his home<br /><br />
            Analysis:<br />
            The quote from above really shows the significance of Ithaca for Odysseus. It is not just his homeland but also the place that represents his deepest desires and aspirations. The thought of Ithaca for Odysseus gives him strength and determination which allows him to know his identity and life’s purpose. Ithaca therefore serves as a powerful narrative and is the anchor in “The Odyssey.” This place also serves as the ultimate achievement of peace after chaos<br />

            <img src="https://www.greeka.com/photos/ionian/ithaca/about/hero/ithaca-about-1280.webp" alt="Ithaca" style={{ width: '100%', height: 'auto' }} />
          </Popup>
        </Marker>
        {/* Marker for Troy */}
        <Marker position={[39.9573, 26.2389]}>
          <Popup>
            Troy <br />
            Cited Quote from "The Odyssey" <br />
            “How tough he was! And what impressive fortitude he showed inside the Wooden Horse! We fighters lurked inside, to bring destruction to the Trojans. You came there too. Some spirit who desired to glorify the Trojans urged you on.” <br />
            Book 4, lines 270-275. <br /><br />
            Description <br />
            Troy was known for its central role in the Trojan War. It is described through flashbacks such as the one above. It was a background where Trojan warriors and Greeks would fight over honor, love and retribution. The war’s climax was epitomized by the deception of the Trojan Horse (strategy by Odysseus), marks the height of the Greek’s military prowess. <br /><br />
            Analysis <br />
            Troy was a place where Odysseus was really able to show his military genius but also him being a warrior. The fall of Troy sets a stage for consequences to follow, especially for Odysseus because his journey home has a lot of trials that were imposed by the gods. Troy represents a complex emblem of glory and ruin. It reminds the reader that there is a human cost of victory. <br />

            <img src="https://www.acetestravel.com/tour-image/troy.webp" alt="Troy" style={{ width: '100%', height: 'auto' }} />
          </Popup>

        </Marker>
        {/* Marker for Pylos */}
        <Marker position={[36.9147, 21.6964]}>
          <Popup>
            Pylos  <br />
            Quote: <br />
            Telemachus arrived in Pylos, where the Pylians were bringing to the beach black bulls for blue Poseidon, Lord of Earthquakes. There were nine benches, fifty men on each, and each group had nine bulls to sacrifice. They burned the thigh-bones for the god, and ate the innards. <br />
            Book 3: 4-10 <br /><br />
            Description  <br />
            Pylos is a peaceful and orderly kingdom under the rule of Nestor who is the aged king that is known for his hospitality of others. It is a very serene place, known for its respect and religious holdings towards Poseidon. It's very different from Ithaca, which is a city that is much more chaotic and where disorder has erupted because Odysseus was not present. <br /><br />
            Analysis  <br />
            Pylos was a place where Telemachus was able to journey into manhood. He seeked and received counsel on how to deal with suitors that were usurping his father’s home. Furthermore, Pylos symbolizes the ideal of communal respect for tradition and authority. It also gives the poem some more depth by contrasting Pylos to the very violent Ithaca. <br />

            <img src="https://visit-pylos-nestor.gr/wp-content/uploads/2019/04/pylos1-1.jpg" alt="Pylos" style={{ width: '100%', height: 'auto' }} />
          </Popup>

        </Marker>
        {/* Marker for Sparta */}
        <Marker position={[37.0738, 22.4291]}>
          <Popup>
            Sparta: <br />
            Cited Quote from "The Odyssey" <br />
            “They came to Sparta, land of caves and valleys, and drove to Menelaus’ house. They found him hosting a wedding feast for many guests to celebrate his children’s marriages.” <br />
            — Telemachus describes his arrival in Sparta in Book 4, lines 1-4. <br /><br />
            Description <br />
            Sparta is ruled by King Menelaus and Queen Helen, and represents great wealth in the poem. It is very different to other locations in the poem. Telemachus visits because of its peace and prosperity. The city is a well fortified place and is in the middle of a valley, which shows it being a historical military strength. <br /><br />
            Analysis <br />
            This place was very important for characters in the Odyssey. It was a secure and guarded place that represented a rich society that had culture and order, which contrasted the environment in Ithaca. For character development, we saw Sparta teach Telemachus vital lessons in leadership and governance, which allowed him to have more potential when ruling. The setting also gives some insight into Odysseus’s past as well. <br />

            <img src="https://www.grunge.com/img/gallery/what-is-sparta-like-today/intro-1675876297.webp" alt="Sparta" style={{ width: '100%', height: 'auto' }} />
          </Popup>

        </Marker>
        {/* Marker for Ogygia */}
        <Marker position={[35.8889, 14.4477]}>
          <Popup>
            Ogygia: <br />
            Cited Quote from "The Odyssey" <br />
            “He must swoop down to Ogygia right away and tell the beautiful Calypso we have formed a firm decision that Odysseus has waited long enough” <br />
            Book 1: 81-87 <br /><br />
            Description <br />
            Ogygia is a remote enchanting, island that is shrouded by mystery and completely isolated from the rest of the world. Calypso lives there by herself. The setting is very lush and filled with natural beauty that both captivates and imprisons Odysseus for 7 years. <br /><br />
            Analysis <br />
            The geographical isolation of Ogygia underscores its role in the narrative as a place of both seduction and entrapment. This place was a very big detour from his journey. It had allowed for Odysseus to develop by allowing a place of isolation. He was removed from his roles of being a warrior and king. During his time, he confronts his desires, priorities, and personal identity. The solitude allows him to reform his thoughts of wanting to go back home in Ithaca to see his friends and family despite Calypso’s temptations. <br />

            <img src="https://www.danielis-yachting.com/images/upload/images/blog/Odyssey/Greek_hero_Odysseus_on_the_island_of_Mljet_Ogygia.jpg" alt="Ogygia" style={{ width: '100%', height: 'auto' }} />
          </Popup>

        </Marker>
        {/* Marker for Isle of the Lotus Eaters */}
        <Marker position={[33.909, 10.8555]}>
          <Popup>
            Isle of the Lotus Eaters: <br />
            Quote <br />
            "But as they ate it, they lost the will to come back and bring news to me. They wanted only to stay there, feeding on lotus with the Lotus-Eaters. They had forgotten home." - Book 9, Lines 93-96. <br /><br />
            Description <br />
            The island of the Lotus Eaters was a very deceptive place for Odysseus and his men. Whoever came to the island to eat the lotus would forget about their past and lose any desire to go home, which was pivotal for Odysseus because his main goal was to go home. The isle was very peaceful, contrary to many other places in the Odyssey, including Odysseus's home in Ithaca. The landscape was very deceptive for Odysseus and his men. <br /><br />
            Analysis <br />
            This setting was pivotal for Odysseus in the narrative because it challenged his ideal of going home much like Ogygia. However, it showed his true strength in his mission. It also showed his leadership over his men. He was able to convince his men and truly remind them of the true treasure: their homes and families. Although the island was deceptive, in the end it strengthened their collective identity, setting a precedent for overcoming future temptations and distractions on their journey. <br />
            <img src="https://cruiseofodysseus.wordpress.com/wp-content/uploads/2015/05/capture.png" alt="Ogygia" style={{ width: '100%', height: 'auto' }} />
          </Popup>

        </Marker>
        {/* Marker for Aeolia */}
        <Marker position={[38.4676, 14.9540]}>
          <Popup>
            Aeolia <br />
            Quote <br />
            "But while I slept my men began to mutter...They opened up the bag, and all the winds rushed out at once." Book 10, Lines 34, 47-48 <br /><br />
            Description <br />
            Aeolia is an island ruled by Aeolus, the keeper of the winds. It is encircled by a bronze wall with smooth cliffs, creating an impenetrable fortress that floats above the sea as well. This place is home to Aeolus and his family, living in luxury and is separated by the rest of the world by being in the middle of the sea. The island is always controlled by Aeolus's ability to control the breeze, making it a luxuriant place. <br /><br />
            Aeolia introduces a big test of patience. Aeolus's gift of the winds was a big help and an example divine assistance in the poem. However, this part of the poem is crucial for developing Odysseus' character as it exposes the limitations of his control over his men. The accidental opening of the bag of winds led to a huge setback, calling into question Odysseus’s ability to lead. Aeolia deepens the tragic elements of the journey, enhancing the complexity of Odysseus’ character as he navigates the tension between leadership and the unpredictability of human nature. <br />
            <img src="https://www.travelandleisure.com/thmb/8WzwKvdVBh4mu1BG3HKgU7yz1LE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-lipari-AEOLIANISLANDS0623-8f38c498762d4e97b0b5b3aa3fe706c1.jpg" alt="Ogygia" style={{ width: '100%', height: 'auto' }} />
          </Popup>

        </Marker>
        {/* Marker for Circe’s Island */}
        <Marker position={[41.2311, 13.0886]}>
          <Popup>
            Circe’s Island (Aeaea) <br />
            Quote <br />
            "Her belly slumps inside the hollow cave; she keeps her heads above the yawning chasm and scopes around the rock, and hunts for fish." - Book 12, Lines 92-94 <br /><br />
            Description <br />
            Circe's island, Aeaea, is depicted as a beautiful, but dangerous, place. It is lush with dense forests and meadows, and the air is perfumed with flowers that mask the underlying threat. Circe’s island has a palace set up in the woodland that is surrounded by wolves and lions. The island has a deceptive charm, which makes visitors feel safe, but in reality Circe was hiding its terrible dangers. This setting blends natural beauty with Circe’s dual nature as a hostess but also a perilous sorceress. <br /><br />
            Analysis <br />
            Circe’s island was very important for Odysseus and his men. Odysseus and his men were made to face their true selves by Circe. They went a transformation into monsters and back. The change shows a metaphor for change and self-awareness, which was very important for them. Odysseus also develops as a leader as a result because of his interactions with Circe. Overall, Circe’s island was able to illustrate how experiences and surroundings from the outside can cause significant changes within, which helps Odysseus achieve his ultimate goal of coming back home as a hero. <br />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/John_Robert_Cozens%2C_Monte_Circeo_at_Sunset%2C_1780s%2C_NGA_70382.jpg/440px-John_Robert_Cozens%2C_Monte_Circeo_at_Sunset%2C_1780s%2C_NGA_70382.jpg" alt="Ogygia" style={{ width: '100%', height: 'auto' }} />

          </Popup>

        </Marker>

        {/* Markers for Scylla and Charybdis */}
        <Marker position={[38.2527, 15.7144]}>
          <Popup>
            Scylla<br />
            Quote <br />
            “She catches dolphins, seals, and sometimes even enormous whales...No sailors ever pass that way unharmed." - Book 12, Lines 95-96, 98 <br /><br />
            Description <br />
            Scylla is a part of a cave that is at a rugged cliff located in one of the narrowest parts of the sea. This part of the sea is violent and has waves crashing against rocks and reflects the monster’s growls filling the air. The cliff itself is quite foreboding, which gives a sense of imminent doom and danger. Scylla’s presence added a layer of tension that was almost tangible as sailors navigated this area fearing the imminent danger. <br /><br />
            Analysis <br />
            Odysseus’s encounter with Scylla is a major event that tests his leadership under extreme pressure. He knows that confronting Scylla will lead to unavoidable casualties, which really emphasizes the realities of leadership where sometimes a leader must choose between the lesser of two evils for the sake of the majority. This was a major point in Odysseus’s character advancement as it showed his ability to make logical and ethical decisions when facing personal losses. The setting of Scylla really adds a layer of tragedy to the narrative and really shows the difficulty of the world that Odysseus has to overcome. <br />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Castello_scilla.jpg/440px-Castello_scilla.jpg" alt="Charybdis" style={{ width: '100%', height: 'auto' }} />
          </Popup>

        </Marker>
        <Marker position={[38.2675, 15.2211]}>
          <Popup>
            Charybdis <br />
            Quote <br />
            “Divine Charybdis sucks black water down. Three times a day she spurts it up; three times she glugs it down." - Book 12, Lines 104-106 <br /><br />
            Description <br />
            Charybdis is near Scylla which is on the opposite side of a narrow sea passage. One of its major characteristics is a gigantic whirlpool that is created three times a day, and each it will suck in a release a huge amount of water. The sea surrounding Charybdis is violent, with rampaging waters and loud sounds that signal impending danger. The whirlpool is quite provoking, embodying a never-ending force of nature that threatens to consume anything it can reach. <br /><br />
            Analysis <br />
            Charybdis embodies the unpredictable challenges that life can present to people. The constant threat of Charybdis tested Odysseus’s crew on their adaptability and endurance. To safely navigate Charybdis, you need to have great precision and be willing to accept your limitations, skills that Odysseus developed through his journey. The obstacle challenged Odysseus to keep persevering while facing high-stakes and reflected the struggle of humans facing forces larger than themselves. Charybdis was a key metaphor for the coming trials that redefined ones’ character, which were key elements that help Odysseus to mature and eventually return home successfully. <br />
            <img src="https://greekgodsandgoddesses.net/wp-content/uploads/2022/01/Charybdis.jpg" alt="Charybdis" style={{ width: '100%', height: 'auto' }} />
          </Popup>

        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
