import { _decorator, Component, Label, Node } from "cc";
const { ccclass, property } = _decorator;
import Colyseus from "db://colyseus-sdk/colyseus.js";

@ccclass("NetworkConnect")
export class NetworkConnect extends Component {
  @property({ type: String })
  hostname = "7bb3-115-79-59-222.ngrok-free.app";

  @property({ type: Number })
  port = 80;

  @property({ type: Boolean })
  useSSL = true;

  @property({ type: Node })
  private ListL: Node[] = [];

  @property({ type: Label })
  private ListLabel: Label[] = [];

  client!: Colyseus.Client;
  room!: Colyseus.Room;

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

      this.room.onMessage("playerList", (message) => {
        this.updatePlayerList(message);
      });

      this.room.onStateChange((state) => {
        console.log("Room state changed:", state);
        console.log("onStateChange: ", state);
        console.log("Players", [...state.players.values()]);
      });

      this.room.onLeave((code) => {
        console.log("Left room with code:", code);
      });
    } catch (e) {
      console.error("Error:", e);
    }
  }

  updatePlayerList(playerList: any[]) {
    const numElements = playerList.length;
    this.ListL.forEach((node) => {
      node.active = false;
    });
    for (let i = 0; i < numElements && i < this.ListL.length; i++) {
      this.ListL[i].active = true;
      this.ListLabel[i].string = playerList[i].sessionId;
    }
  }
}
// import { _decorator, Component, Label, Node } from "cc";
// const { ccclass, property } = _decorator;
// import Colyseus from "db://colyseus-sdk/colyseus.js";

// @ccclass("NetworkConnect")
// export class NetworkConnect extends Component {
//   @property({ type: String })
//   hostname = "7bb3-115-79-59-222.ngrok-free.app";

//   @property({ type: Number })
//   port = 80;

//   @property({ type: Boolean })
//   useSSL = true;

//   @property({ type: Node })
//   private ListL: Node[] = [];

//   @property({ type: Label })
//   private ListLabel: Label[] = [];

//   client!: Colyseus.Client;
//   room!: Colyseus.Room;

//   start() {
//     this.client = new Colyseus.Client(
//       `${this.useSSL ? "wss" : "ws"}://${this.hostname}:${this.port}`
//     );

//     this.connect();
//   }

//   async connect() {
//     try {
//       this.room = await this.client.joinById("Room1");
//       console.log("Joined successfully!");
//       console.log("User's sessionId:", this.room.sessionId);

//       this.startCountdown();
//       this.setupEventListeners();
//     } catch (e) {
//       console.error("Error:", e);
//     }
//   }

//   startCountdown() {
//     const countdownInterval = setInterval(() => {
//       if (this.room.state.countdown > 0) {
//         this.room.state.countdown--;
//         console.log("Countdown:", this.room.state.countdown);
//         this.room.send("countdown", this.room.state.countdown);
//       } else {
//         clearInterval(countdownInterval);
//       }
//     }, 1000);
//   }

//   setupEventListeners() {
//     this.room.onMessage("countdown", (countdown: number) => {
//       // Cập nhật giao diện người chơi với giá trị mới của biến đếm ngược
//     });

//     this.room.onStateChange((state) => {
//       console.log("Room state changed:", state);
//     });

//     this.room.onLeave((code) => {
//       console.log("Left room with code:", code);
//     });
//   }
// }
