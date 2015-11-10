UIProvider ={"curId":"643","curNom":"RUB",
  "round_math":"~1",
  "grpId": "100001",
  "id": "92",
  "logo": "92.gif",
  "receiptName": "",
  "sName": "RU CENTER",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams"
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30605",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер договора",
                  "footer": "Внимание! Номер телефона вводится без <8>, в формате: (ХХХ) ХХХ-ХХ-ХХ",
                  "mask": "<!^\\d+${3,15}>/NIC-<!^[DREG]+${1,3}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{3,15}/NIC-[DREG]{1,3}$",
                  "strip": "False",
                  "type": "text_input"
                },
                {
                  "layout": "ALC",
                  "type": "keyboard"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}