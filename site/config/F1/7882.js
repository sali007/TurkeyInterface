UIProvider ={"curId":"398","curNom":"KZT",
  "grpId": "100005",
  "id": "7882",
  "logo": "7882.gif",
  "receiptName": "",
  "sName": "QIWI Кошелек Казахстан",
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
                    "header": "Введите номер телефона в системе \"QIWI Кошелек\"",
                  "footer": "Внимание номер телефона вводится в формате: 7(xxx)xxx-xx-xx",
                  "mask": "<!^\\d+${11}>",
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