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

  const [counterValues, setCounterValues] = useState({ active: 0, passive: 0 });

  const [selectedDice, setSelectedDice] = useState(null);

  const [players, setPlayers] = useState([
    { name: "たつみ" },
    { name: "ふうが" },
    { name: "たかひろ" },
    { name: "ゆうき" },
  ]);

  const [difficulty, setDifficulty] = useState(["Regular", "Hard", "Extream"]);
  const [selectedDifficulty, setSelectedDifficulty] = useState(0);

  const [isCounterRoll, setIsCounterRoll] = useState(false);

  const [value, setValue] = useState(0);
  const [additionalValue, setAdditionalValue] = useState(0);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding-vertical">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardContent>
            <IonItem>
              <IonCheckbox
                checked={isCounterRoll}
                onIonChange={() => setIsCounterRoll((prev) => !prev)}
              />
              <IonLabel>対抗ロール</IonLabel>
            </IonItem>
            {isCounterRoll && (
              <div>
                <div className="ion-padding-top">
                  <IonLabel>能動側を選択</IonLabel>
                  <p>プレイヤーの能力、技能から選択</p>
                  {players.map((player, i) => {
                    return (
                      <IonButton fill="outline" key={i}>
                        {player.name}
                      </IonButton>
                    );
                  })}
                  <p className="ion-padding-top">
                    または成功値を入力:{counterValues.active}
                  </p>
                  <IonRange
                    pin={true}
                    value={counterValues.active}
                    snaps={true}
                    step={5}
                    ticks={true}
                    onIonChange={(e) =>
                      setCounterValues((prev) => ({
                        ...prev,
                        active: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="ion-padding-top">
                  <IonLabel>受動側を選択</IonLabel>
                  <p>プレイヤーの能力、技能から選択</p>
                  {players.map((player, i) => {
                    return (
                      <IonButton fill="outline" key={i}>
                        {player.name}
                      </IonButton>
                    );
                  })}
                  <p className="ion-padding-top">
                    または成功値を入力:{counterValues.passive}
                  </p>
                  <IonRange
                    pin={true}
                    value={counterValues.passive}
                    snaps={true}
                    step={5}
                    ticks={true}
                    onIonChange={(e) =>
                      setCounterValues((prev) => ({
                        ...prev,
                        passive: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            )}
          </IonCardContent>
        </IonCard>
        {!isCounterRoll && (
          <div>
            <IonCard>
              <IonCardHeader>
                <IonToolbar>
                  <IonTitle>ダイスを選択</IonTitle>
                </IonToolbar>
              </IonCardHeader>
              <IonCardContent>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
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
                </div>
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
                <p className="ion-padding-top">または成功値を入力:{value}</p>
                <IonRange
                  pin={true}
                  value={value}
                  onIonChange={(e) => setValue(e.detail.value)}
                />
              </IonCardContent>
            </IonCard>
          </div>
        )}
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
            <div
              className="ion-padding-top"
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              {difficulty.map((diff, i) => {
                return (
                  <IonButton
                    key={i}
                    fill={selectedDifficulty === i ? "solid" : "outline"}
                    onClick={() => setSelectedDifficulty(i)}
                  >
                    {diff}
                  </IonButton>
                );
              })}
            </div>
            <IonItem className="ion-padding-top">
              <IonLabel position="stacked">
                ロール結果を増減させる:{additionalValue}
              </IonLabel>
              <IonRange
                pin={true}
                value={additionalValue}
                min={-100}
                max={100}
                snaps={true}
                step={10}
                ticks={true}
                color={additionalValue >= 0 ? "primary" : "danger"}
                onIonChange={(e) => setAdditionalValue(e.detail.value)}
              />
            </IonItem>
          </IonCardContent>
        </IonCard>
        <IonButton expand="block" className="ion-padding-horizontal">
          ロール
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
