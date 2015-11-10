UIProvider ={"curId":"980","curNom":"UAH",

  "grpId": "100002",
  "id": "300020",
  "logo": "1856.gif",
  "receiptName": "",
  "sName": "TravelSIM",
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
                  "header": "Введите номер TravelSIM без цифр 372",
                  "footer": "Внимание! Номер телефона вводится без <00>, в формате: (372X) ХХХ-ХХ-ХХ",
                  "mask": "372<!^\\d+${8}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{11}$",
                  "strip": "false",
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