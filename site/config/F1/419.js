
UIProvider ={"curId":"643","curNom":"RUB",
  "grpId": "100001",
  "id": "419",
  "logo": "419.gif",
  "receiptName": "",
  "sName": "Globalsim",
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
                  "header": "Введите Ваш номер без первой цифры 3",
                  "footer": "Внимание! Номер телефона вводится без <00>, в формате: (3XXХ) ХХХ-ХХ-ХХ",
                  "mask": "3<!^\\d+${10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^372\\d{8}$",
                  "strip": "False",
                  "type": "text_input"
                },
                {
                  "layout": "DG",
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