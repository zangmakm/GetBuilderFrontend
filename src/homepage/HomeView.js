import React from "react";
import "./homeView.scss";
import VideoHeader from "./components/VideoHeader";

function HomeView() {
  return (
    <div>
      <VideoHeader />
      <section>
        <div className="content">
          <h2>Builder Website</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            consectetur vitae diam sollicitudin mattis. Nam sagittis dui non
            lectus feugiat accumsan. Phasellus sit amet magna ut diam pharetra
            euismod ac et enim. Proin leo elit, condimentum non bibendum in,
            feugiat sed ante. Fusce mattis scelerisque orci ut maximus. Maecenas
            ut auctor metus, nec eleifend lacus. Praesent lobortis, nulla ut
            mollis luctus, est quam convallis diam, at bibendum dolor risus quis
            velit. Duis orci justo, dictum in fringilla non, ultricies id quam.
            Quisque iaculis est lacus, in pretium urna convallis ac. Fusce eget
            feugiat justo, feugiat maximus nisl. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Proin
            suscipit rutrum lacus, ut sagittis augue pulvinar ut. Nullam
            laoreet, quam at tempor pulvinar, felis enim finibus dui, non
            ultrices felis leo a ex.
          </p>
          <p>
            Cras sollicitudin hendrerit nisl ut dictum. Pellentesque egestas
            elementum mauris, tempus aliquam felis commodo id. Donec eu arcu
            porttitor, pulvinar nisi id, facilisis nisl. Nulla consequat sodales
            urna nec auctor. Proin venenatis, tellus a molestie faucibus, nibh
            velit interdum eros, vel posuere ligula nunc ac sapien. Sed ultrices
            dui sed dui consectetur, quis bibendum massa sodales. Proin id
            imperdiet ipsum. Curabitur ut interdum mauris, vitae placerat risus.
            Duis placerat congue laoreet.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomeView;
