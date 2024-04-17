import { _decorator, Button, Component, Label, logID, Node, Vec3 } from "cc";
import { AudioController } from "./AudioController";
const { ccclass, property } = _decorator;

@ccclass("Chip")
export class Chip extends Component {
  @property({ type: [Button] })
  listButtonBet: Button[] = [];
  private checkTiger: boolean = false;
  private checkdragon: boolean = false;
  private checkTie: boolean = false;
  public UserBet: number = 0;
  buttonPub;
  @property({
    type: Label,
  })
  private betTiger: Label;
  @property({
    type: AudioController,
  })
  private AudioController: AudioController;

  public listScore: number[] = [1, 2, 3, 4, 5, 6];
  start() {
    let previousButton = null;

    for (let i = 0; i < this.listButtonBet.length; i++) {
      let button = this.listButtonBet[i];

      button.node.on(Button.EventType.CLICK, () => {
        // Nếu có nút được nhấp trước đó, đặt lại kích thước của nó
        if (previousButton) {
          previousButton.node.scale = new Vec3(1, 1, 1);
        }

        // Thay đổi kích thước của nút được nhấp hiện tại
        button.node.scale = new Vec3(1.2, 1.2, 1.2);
        previousButton = button;
        this.AudioController.onAudio(7);
        // Cập nhật dữ liệu hoặc thực hiện các thao tác khác
        this.UserBet = this.listScore[i];
        this.buttonPub = button;
      });
    }
  }
  update(deltaTime: number) {}
}
