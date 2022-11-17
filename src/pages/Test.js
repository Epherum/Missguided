import { useState, useEffect } from "react";
import { db, storage } from "../firebase-config";
import {
  limit,
  query,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { Link } from "react-router-dom";
import "locomotive-scroll/src/locomotive-scroll.scss";
import LocomotiveScroll from "locomotive-scroll";
import useLocoScroll from "../hooks/useLocoScroll";
function Test() {
  const [loco, setLoco] = useState(false);

  //set loco to true after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setLoco(true);
    }, 2000);
  }, []);
  useLocoScroll(loco);

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector(".hellooo"),
  //     smooth: true,
  //     lerp: 0.075,
  //     multiplier: 0.8,
  //   });
  //   return () => scroll.destroy();
  // }, []);

  return (
    <div className="App" data-scroll-container>
      <h1 data-scroll-section>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        tenetur odio quos harum quod dolor consequuntur laudantium ullam!
        Corporis dolorem, ipsa, ex natus iste eum est cum animi necessitatibus
        fuga excepturi deserunt consectetur incidunt, aliquam quaerat itaque
        facilis sequi delectus. Nobis, ea sit odit distinctio aperiam ipsum
        dolor beatae eveniet est mollitia. Error praesentium, quisquam nostrum
        minus dolorum quis adipisci similique molestias veritatis amet id
        consectetur animi voluptas delectus magnam, laborum suscipit ullam,
        libero ea laboriosam obcaecati consequatur. Iste, quas? Qui ratione
        quisquam quibusdam ipsum vitae aperiam itaque nihil! Quasi
        necessitatibus, totam voluptate provident iure sunt ratione. Quisquam
        itaque aperiam animi, aut illo maxime beatae quod dolores pariatur
        voluptate illum nisi cupiditate, magnam deserunt corrupti perferendis
        voluptas consectetur recusandae dolorem est eligendi dolore. Nemo, esse
        voluptates similique est quo explicabo earum voluptas quaerat vitae
        reiciendis iure velit totam officia sequi nisi tempore libero veniam
        saepe impedit illum possimus asperiores? Tempora id atque facere,
        impedit nam et minus esse recusandae maiores sequi exercitationem qui
        dicta nobis labore vel doloremque hic aut consequatur fugiat amet neque
        non voluptas illo? Eveniet reprehenderit aspernatur vero voluptatum
        facere corrupti veritatis dolor atque, eius commodi enim consequuntur
        nostrum autem ipsa illum maiores quo, modi laboriosam explicabo quis
        expedita itaque. Quisquam neque totam architecto sint, eius enim natus
        incidunt maxime nihil officia et quae rerum possimus nam fugiat
        accusantium beatae ipsam eveniet vero expedita sapiente adipisci rem
        aliquam labore. Explicabo ab doloremque placeat facere dolorum
        voluptatum et fugit assumenda odio officia repellendus tempora quas
        nostrum sed, praesentium cum aspernatur ad alias quos. Harum in qui quia
        maiores sunt quos quibusdam adipisci enim natus eos cupiditate pariatur
        dolore nemo soluta, voluptas possimus. Odit doloremque dolores debitis
        laboriosam vero ratione, qui earum, libero excepturi aliquam harum at
        necessitatibus, sit explicabo nihil iure veritatis aliquid praesentium
        ut optio maxime ullam omnis porro. Doloribus ipsa pariatur tenetur, eum
        corporis doloremque veritatis vel! At, id a? Est repellat consequatur,
        quae consectetur sint maiores sunt perspiciatis laboriosam porro qui ad
        voluptates vitae ratione esse quia, perferendis, ea exercitationem
        cumque possimus alias modi necessitatibus illum tenetur cum! Non odio
        quidem fuga fugiat ad alias illo officia eligendi reprehenderit. Eum
        vitae laboriosam necessitatibus, libero optio voluptate sit modi
        molestiae rem, sint ad earum ab quos animi quidem ea blanditiis amet
        consequuntur debitis aperiam tempore labore! Voluptate, cupiditate. Sed
        ex dolor culpa at modi tempora voluptate, corrupti iusto fugit ea
        doloremque eos blanditiis repellat beatae? Odio qui laborum harum eos
        repellendus, blanditiis ab. Iusto, fuga mollitia inventore vitae ipsa
        maiores voluptate beatae, debitis incidunt a quisquam magni aliquid
        voluptatibus veritatis quod, quo harum reiciendis ex necessitatibus
        eaque. Aperiam eligendi illum reiciendis a, ullam inventore totam animi
        modi consequatur accusantium aliquid explicabo soluta libero similique
        porro molestias pariatur qui repudiandae vitae natus cum id. Quam
        assumenda sequi nemo! Ad a, voluptatem veniam distinctio repellat
        corporis commodi autem sint fugiat iusto repudiandae! Aliquid, sint!
        Itaque esse maxime asperiores maiores architecto! Nostrum soluta
        molestiae vel placeat, porro quia labore repellat eaque et recusandae
        illo, voluptas eos neque id numquam corporis doloribus quam dicta
        magnam. Obcaecati harum tempora deleniti molestiae iste numquam aliquam
        soluta ab necessitatibus. Possimus, voluptatibus culpa qui consectetur
        modi repellendus vel eligendi explicabo harum, excepturi quod. Magni
        corrupti qui doloribus enim sapiente quo nobis veniam impedit reiciendis
        nisi, dolor pariatur odit voluptatibus, officiis eligendi est vel minus
        asperiores natus dicta? Temporibus corporis iste pariatur, delectus
        sapiente nesciunt magnam, similique, alias porro dolorem aspernatur qui
        nostrum ab fuga rerum provident eos iusto numquam. Vero earum facere
        rerum quo nisi necessitatibus. Earum nam at aliquam officiis, quod sunt
        omnis vitae, quibusdam possimus expedita hic reiciendis unde, quisquam
        dolorem! Porro itaque sit quam nihil, corporis quaerat, pariatur
        voluptatibus vel voluptates quisquam aspernatur odio rerum eius ea
        repellat et fugit dolor veritatis consequatur? Deleniti praesentium odit
        maxime tenetur laudantium quod optio, rerum reprehenderit consectetur
        incidunt, modi saepe minima, obcaecati provident soluta ad nobis tempore
        quidem deserunt? Dolorem repellat impedit laudantium ipsam repellendus
        tenetur tempore, eligendi molestias nam cumque praesentium reprehenderit
        dolor. Nulla, consequatur veniam fuga, pariatur officia dolorum
        similique alias nesciunt consequuntur perferendis magnam a molestias!
        Officiis, blanditiis. Nobis iste error accusantium corporis vel sit quia
        alias temporibus repudiandae eum, eaque adipisci distinctio doloremque
        nemo, similique harum magnam dolorum nostrum? Quisquam quidem quam
        possimus debitis est numquam porro optio, aspernatur, sit laudantium
        velit suscipit aperiam consequuntur architecto saepe recusandae
        obcaecati totam eius tempore ad, officiis veniam sunt dignissimos? Odit
        fuga veritatis eos omnis, assumenda laborum. Debitis cupiditate facilis
        beatae, assumenda quia rem voluptatem eum voluptates voluptate unde
        perspiciatis, quos est quae vitae totam eos iusto atque consequuntur,
        architecto consectetur temporibus velit. Quasi, dolores ea quam ipsam
        facere magni odio veritatis culpa maxime itaque earum aperiam. Suscipit
        tenetur expedita veritatis labore cum obcaecati itaque, fugit dolore
        ipsum cumque perspiciatis temporibus libero nam sunt ad praesentium,
        pariatur facere exercitationem vero veniam eligendi numquam! Voluptate
        quas neque rerum labore veritatis voluptatum, itaque magnam molestiae
        consectetur quibusdam laboriosam ea explicabo harum blanditiis, atque
        eaque rem velit maiores at debitis qui ipsam. Quis officia illum, quam
        tempore repellendus sint soluta iure perferendis, commodi deleniti vitae
        voluptates autem iste alias. Blanditiis minus vero laudantium, harum
        unde alias magnam voluptas animi saepe, quos quidem doloremque corporis
        quasi nesciunt ad at eveniet nemo velit facere, quisquam beatae
        inventore excepturi veniam eaque. Quibusdam cumque non velit dolor
        laboriosam consequatur doloremque, atque iusto perspiciatis mollitia
        esse repudiandae sint at! Incidunt enim quidem minus quas fugiat iusto
        expedita! Fugit expedita quae consequatur quisquam perspiciatis ipsam
        soluta quas recusandae quidem adipisci ipsa corrupti minus iste
        perferendis, pariatur hic facere obcaecati sit fuga veniam quasi facilis
        necessitatibus vitae. Ipsum ea fugiat sed! Quod consequatur, dignissimos
        necessitatibus alias cumque rem natus eligendi omnis voluptas dolore
        culpa fugiat rerum, exercitationem sit minima tempore voluptatem iure
        quas itaque similique? Officiis, aliquid doloremque? Animi repellendus
        ullam aut amet quos facilis qui illum soluta omnis, quas nisi ad
        nesciunt culpa unde necessitatibus. Dolorum nulla non hic dolorem quos
        ratione, natus ab sint quae, ex iure? Possimus voluptate aut eos
        repellat vitae suscipit iste, ea adipisci illo nobis atque cum.
      </h1>
      {/* <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {result.map((item) => {
        return (
          <Link to={`/categories/${item.category}/${item.name}/${item.id}`}>
            <p>{item.name}</p>
          </Link>
        );
      })} */}
    </div>
  );
}

export default Test;
