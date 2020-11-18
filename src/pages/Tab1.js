import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonChip,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonRange,
  IonIcon,
  IonCheckbox,
  IonInput,
} from "@ionic/react";
import "./Tab1.css";

const Tab1 = () => {
  const [dices, setDices] = useState([
    { name: "1D3" },
    { name: "1D4" },
    { name: "1D6" },
    { name: "1D100" },
  ]);

  const [selectedDice, setSelectedDice] = useState(null);

  const [players, setPlayers] = useState([
    { name: "たつみ" },
    { name: "ふうが" },
    { name: "たかひろ" },
    { name: "ゆうき" },
  ]);

  const [value, setValue] = useState(null);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonToolbar>
              <IonTitle>ダイスを選択</IonTitle>
            </IonToolbar>
          </IonCardHeader>
          <IonCardContent>
            {dices.map((dice, i) => {
              return (
                <IonButton
                  key={i}
                  fill={selectedDice === i ? "solid" : "outline"}
                  onClick={() => setSelectedDice(i)}
                >
                  {dice.name}
                </IonButton>
              );
            })}
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonToolbar>
              <IonTitle>成功値の選択</IonTitle>
            </IonToolbar>
          </IonCardHeader>
          <IonCardContent>
            <p>プレイヤーの能力、技能から選択</p>
            {players.map((player, i) => {
              return (
                <IonButton fill="outline" key={i}>
                  {player.name}
                </IonButton>
              );
            })}
            <p className="ion-padding-top">または成功値を入力</p>
            <IonRange
              pin={true}
              value={value}
              onIonChange={(e) => setValue(e.detail.value)}
            />
          </IonCardContent>
        </IonCard>
        <IonButton expand="block" className="ion-padding-horizontal">
          ロール
        </IonButton>
        <IonCard>
          <IonCardHeader>
            <IonToolbar>
              <IonTitle>カスタム</IonTitle>
            </IonToolbar>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonCheckbox />
              <IonLabel>ボーナスダイス</IonLabel>
            </IonItem>
            <IonItem>
              <IonCheckbox />
              <IonLabel>ペナルティダイス</IonLabel>
            </IonItem>
            <IonItem>
              <IonInput type="phone" />
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
