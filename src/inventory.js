import React from "react";
import SideMenu from "./components/sidemenu";
import Nav from "./components/nav";
import Login from "./components/Login";

function Inv() {
  return (
    <div className="Inv">
      <Nav></Nav>
      <SideMenu></SideMenu>
      <Login></Login>
      <h1 className="inventarioTitle">Inventario</h1>
      <div className="inventory">
        <div className="Invetory-canvas">
          <div className="inv">
            <div className="item-inv">
              <img src="https://media.discordapp.net/attachments/1078132949121245285/1078144440457244753/ezkll_healing_potion_Glass_bottle_RPG_fantasia_020da203-b33b-4052-9669-60da5addbba3.png?width=666&height=666" />
              <div className="item-text">
                <p>Poção de Cura Menor</p>
                <span>1X</span>
              </div>
              <p className="item-desc">
                a Poção de Cura Menor cura uma pequena quantidade de pontos de
                vida do personagem, ajudando a recuperar de pequenos ferimentos.
                <br />
                <span>Efeito: + 10HP</span>
              </p>
            </div>
            <div className="item-inv">
              <img src="https://media.discordapp.net/attachments/1078132949121245285/1078144909032296511/ezkll_healing_potion_Glass_bottle_RPG_fantasia_b03deffc-d045-4075-a8ab-4f45c39cea7b.png?width=666&height=666" />
              <div className="item-text">
                <p>Poção de Cura Média</p>
                <span>1X</span>
              </div>
              <p className="item-desc">
                uma poção um pouco mais potente, a Poção de Cura Média cura mais
                pontos de vida do que a Poção de Cura Menor, sendo mais útil em
                situações de combate.
                <br />
                <span>Efeito: + 25HP</span>
              </p>
            </div>
            <div className="item-inv">
              <img src="https://media.discordapp.net/attachments/1078132949121245285/1078145411316990042/ezkll_healing_potion_Glass_bottle_RPG_fantasia_5654fbad-838e-4400-a8b7-81ee6ab228f9.png?width=702&height=702" />
              <div className="item-text">
                <p>Poção de Cura Grande</p>
                <span>1X</span>
              </div>
              <p className="item-desc">
                uma poção de cura muito potente, a Poção de Cura Grande é capaz
                de curar uma grande quantia dos pontos de vida do personagem,
                tornando-a uma opção muito valiosa em situações de emergência.
                <br />
                <span>Efeito: + 50HP</span>
              </p>
            </div>
            <div className="item-inv">
              <img src="https://media.discordapp.net/attachments/1078132949121245285/1078149697581097050/ezkll_Small_mana_potion_fantasy_RPG_cbf46db1-6fe4-4d96-974b-36812adc7375.png?width=702&height=702" />
              <div className="item-text">
                <p>Poção de Mana Menor</p>
                <span>1X</span>
              </div>
              <p className="item-desc">
                a Poção de Mana Menor restaura uma pequena quantidade de pontos
                de mana do personagem, o ajudante durante batalhas.
                <br />
                <span>Efeito: + 10MP</span>
              </p>
            </div>
            <div className="item-inv">
              <img src="https://media.discordapp.net/attachments/1078132949121245285/1078151478977507438/ezkll_Small_mana_potion_fantasy_RPG_3f9f3126-9ce5-472e-a0f9-5563bb78fe2a.png?width=702&height=702" />
              <div className="item-text">
                <p>Poção de Mana Média</p>
                <span>1X</span>
              </div>
              <p className="item-desc">
                uma poção um pouco mais potente, a Poção de Mana Média cura mais
                pontos de mana do que a Poção de Mana Menor, sendo mais útil em
                situações de combate.
                <br />
                <span>Efeito: + 25MP</span>
              </p>
            </div>
            <div className="item-inv">
              <img src="https://media.discordapp.net/attachments/1078132949121245285/1078152642968166420/ezkll_Small_mana_potion_fantasy_RPG_6ad6f295-c84f-4cc8-bc6b-38c5b0add42f.png?width=702&height=702" />
              <div className="item-text">
                <p>Poção de Mana Grande</p>
                <span>1X</span>
              </div>
              <p className="item-desc">
                uma poção de Mana muito potente, a Poção de Mana Grande é capaz
                de restaurar uma grande quantia dos pontos de mana do
                personagem, tornando-a uma opção muito valiosa em situações de
                emergência.
                <br />
                <span>Efeito: + 50MP</span>
              </p>
            </div>
            <div className="item-inv">
              <img src="https://media.discordapp.net/attachments/1078132949121245285/1078155323929538602/ezkll_Imperial_Simple_Sword_Fantasy_RPG_Beginner_44780255-a05a-412b-a888-67f6df3f7e7a.png?width=702&height=702" />
              <div className="item-text">
                <p>Espada Comum</p>
                <span>1X</span>
              </div>
              <p className="item-desc">
                A espada Comum é uma arma corpo-a-corpo que pode ser usada por
                muitos tipos de personagens, desde guerreiros a aventureiros
                mágicos. Ela é geralmente leve e fácil de manusear, permitindo
                que o usuário a mova rapidamente em combate.
                <br />
                <span>Efeito: + 10ATK VLC: AG ATK: FRC + EF</span>
              </p>
            </div>
            <div className="item-inv">
              <img src="https://media.discordapp.net/attachments/1078132949121245285/1078170775930011718/ezkll_common_bow_and_arrow_RPG_fa676b2d-842d-4f60-af35-de2e3b565aa4.png?width=702&height=702" />
              <div className="item-text">
                <p>Arco Comum</p>
                <span>1X</span>
              </div>
              <p className="item-desc">
                O arco Comum é uma arma de longo alcance que permitem que o
                aventureiro ataque inimigos de longe, sem precisar se aproximar
                muito deles.
                <br />
                <span>VLC: MR ATK: FRC</span>
              </p>
            </div>
            <div className="item-inv">
              <img src="https://media.discordapp.net/attachments/1078132949121245285/1078177367685611530/grid_0-1.webp?width=702&height=702" />
              <div className="item-text">
                <p>Flecha Comum</p>
                <span>1X</span>
              </div>
              <p className="item-desc">
              a Flecha Comum é feita de madeira e possui uma ponta de pedra. Essa é uma das versões mais primitivas e antigas de flechas, usada desde os tempos pré-históricos por caçadores e guerreiros.
                <br />
                <span>Efeito: + 10ATK</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="inventoryW"></div>
    </div>
  );
}

export default Inv;
