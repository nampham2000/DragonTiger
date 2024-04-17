System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, Vec3, AudioController, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Chip;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioController(extras) {
    _reporterNs.report("AudioController", "./AudioController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      AudioController = _unresolved_2.AudioController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cd8d8scWvJGyKsae8zUVEbw", "Chip", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'logID', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Chip", Chip = (_dec = ccclass("Chip"), _dec2 = property({
        type: [Button]
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: _crd && AudioController === void 0 ? (_reportPossibleCrUseOfAudioController({
          error: Error()
        }), AudioController) : AudioController
      }), _dec(_class = (_class2 = class Chip extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "listButtonBet", _descriptor, this);

          this.checkTiger = false;
          this.checkdragon = false;
          this.checkTie = false;
          this.UserBet = 0;
          this.buttonPub = void 0;

          _initializerDefineProperty(this, "betTiger", _descriptor2, this);

          _initializerDefineProperty(this, "AudioController", _descriptor3, this);

          this.listScore = [1, 2, 3, 4, 5, 6];
        }

        start() {
          var _this = this;

          var previousButton = null;

          var _loop = function _loop(i) {
            var button = _this.listButtonBet[i];
            button.node.on(Button.EventType.CLICK, () => {
              // Nếu có nút được nhấp trước đó, đặt lại kích thước của nó
              if (previousButton) {
                previousButton.node.scale = new Vec3(1, 1, 1);
              } // Thay đổi kích thước của nút được nhấp hiện tại


              button.node.scale = new Vec3(1.2, 1.2, 1.2);
              previousButton = button;

              _this.AudioController.onAudio(7); // Cập nhật dữ liệu hoặc thực hiện các thao tác khác


              _this.UserBet = _this.listScore[i];
              _this.buttonPub = button;
            });
          };

          for (var i = 0; i < this.listButtonBet.length; i++) {
            _loop(i);
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listButtonBet", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "betTiger", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "AudioController", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0d324bb04a073971c1b7211839eb13f436683c52.js.map