import { _decorator, Component, Label, Node, Sprite, tween, Vec3 } from "cc";
const { ccclass, property } = _decorator;
import Colyseus from "db://colyseus-sdk/colyseus.js";
import { AudioController } from "./AudioController";

@ccclass("NetworkConnect")
export class NetworkConnect extends Component {
  @property({ type: String })
  hostname = "localhost";

  @property({ type: Number })
  port = 80;

  @property({ type: Boolean })
  useSSL = true;

  @property({ type: Node })
  private ListL: Node[] = [];

  @property({ type: Label })
  private ListLabel: Label[] = [];

  @property(Label)
  private TimerDown: Label;

  client!: Colyseus.Client;
  room!: Colyseus.Room;
  gameState;
  resultDragon: number = 0;
  resultTiger: number = 0;
  TotalUser;
  UserBet;
  NotmeBet;
  result;

  @property({
    type: AudioController,
  })
  private AudioController: AudioController;

  start() {
    this.client = new Colyseus.Client(
      `${this.useSSL ? "wss" : "ws"}://${this.hostname}:${this.port}`
    );

    this.connect();
  }

  async connect() {
    try {
      const rooms = await this.client.getAvailableRooms("room1");

      if (rooms.length === 0) {
        this.room = await this.client.create("room1");
        console.log("Created new room with sessionId:", this.room.sessionId);
      } else {
        // Nếu có phòng có sẵn, tham gia vào phòng đầu tiên trong danh sách
        this.room = await this.client.joinById(rooms[0].roomId);
        console.log(
          "Joined existing room with sessionId:",
          this.room.sessionId
        );
      }

      console.log("Joined successfully!");
      console.log("User's sessionId:", this.room.sessionId);

      // this.room.onMessage("playerList", (message) => {
      //   console.log(message);
      //   this.updatePlayerList(message);
      // });

      this.room.onMessage("timer", (message) => {
        this.TimerDown.string = message;
        if (message < 30 && message > 0) {
          this.AudioController.onAudio(3);
        }
        if (message === 0) {
          this.AudioController.onAudio(4);
        }
      });

      this.room.onMessage("result", (message) => {
        console.log(message.result);
        console.log("rong", message.dragonCard.value);
        console.log("ho", message.tigerCard.value);
      });

      this.room.onMessage("userBet", (message) => {
        if (message.playerID !== this.room.sessionId) {
          console.log(message);
          this.UserBet = message.playerID;
        } else {
          console.log("false");
        }
      });

      this.room.onStateChange((state) => {
        console.log("Room state changed:", state);
        console.log("onStateChange: ", state);
        console.log(state.roundState);
        console.log(this.room.state);
        const players = [...state.players.values()];
        this.updatePlayerList(players);
        console.log("PlayerStatus", players[0].isHost);
        this.TotalUser = players.length;
        this.gameState = state.roundState;
      });

      this.room.onLeave((code) => {
        console.log("Left room with code:", code);
      });
    } catch (e) {
      console.error("Error:", e);
    }
  }

  updatePlayerList(playerList: any[]) {
    let displayIndex = 0;
    const numElements = playerList.length;
    this.ListL.forEach((node) => {
      node.active = false;
    });
    for (let i = 0; i < numElements && displayIndex < this.ListL.length; i++) {
      if (playerList[i].sessionId !== this.room.sessionId) {
        this.ListLabel[displayIndex].string = playerList[i].sessionId;
        this.ListL[displayIndex].active = true;
        displayIndex++;
        this.AudioController.onAudio(9);
      }
    }
    for (let i = displayIndex; i < this.ListL.length; i++) {
      this.ListL[i].active = false;
    }
  }

  // createSpriteNode(posX, PosY, PosNode: Node) {
  //   // Tạo một Node mới
  //   const spriteNode = new Node("SpriteNode");
  //   spriteNode.scale = new Vec3(0.5, 0.5);

  //   // Thêm một component Sprite vào Node
  //   const spriteComponent = spriteNode.addComponent(Sprite);

  //   // Gán SpriteFrame cho component Sprite
  //   spriteComponent.spriteFrame =
  //     this.chipNode.buttonPub.node.getComponent(Sprite).spriteFrame;
  //   // spriteNode.position=new Vec3(this.chipNode.buttonPub.node.position)
  //   // Thêm Node vào Scene hiện tại (ví dụ: Node cha của tất cả Sprite)
  //   PosNode.addChild(spriteNode);
  //   tween(spriteNode)
  //     .to(0.3, { position: new Vec3(posX, PosY) })
  //     .start();
  // }
}
