UIProvider  ={"curId":"981","curNom":"GEL",
  "grpId": "100004",
  "id": "300018",
  "logo": "289.gif",
  "receiptName": "",
  "sName": "Билайн Грузия",
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
                  "header": "Введите Ваш номер ",
                  "footer": "Внимание! Номер должен начинаться с префиксов: 97, 92, 79, 74, 71, 68. Пример: 97970034",
                  "mask": "<!^\\d+${8}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^((97[0-9]{6})|(92[0-9]{6})|(79[0-9]{6})|(74[0-9]{6})|(68[0-9]{6})|(71[0-9]{6}))$",
                  "strip": "True",
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