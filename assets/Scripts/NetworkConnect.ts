import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

import Colyseus from "db://colyseus-sdk/colyseus.js";

@ccclass("NetworkConnect")
export class NetworkConnect extends Component {
  @property hostname = "7bb3-115-79-59-222.ngrok-free.app";
  @property port = 80;
  @property useSSL = true;

  client!: Colyseus.Client;
  room!: Colyseus.Room;

  start() {
    // Instantiate Colyseus Client
    // connects into (ws|wss)://hostname[:port]
    this.client = new Colyseus.Client(
      `${this.useSSL ? "wss" : "ws"}://${this.hostname}`
    );

    // Connect into the room
    this.connect();
  }

  async connect() {
    try {
      // const a = [...this.room.state.players.values()]
      this.room = await this.client.joinById("VDGHY");
      console.log("joined successfully!");
      console.log("user's sessionId:", this.room.sessionId);

      console.log("players", this.room.state.players);
      this.room.onMessage("playerList", (message) => {
        console.log("message received from server");
        console.log("Mess", message);
        // console.log("players", [...this.room.state.players.values()]);
      });

      this.room.onStateChange((state) => {
        console.log("onStateChange: ", state);
      });

      this.room.onLeave((code) => {
        console.log("onLeave:", code);
      });
    } catch (e) {
      console.error(e);
    }
  }
}
