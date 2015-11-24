UIProvider = {
    "curId": "860", "curNom": "UZS",
  "grpId": "1000014",
  "id": "300019",
  "logo": "2376.gif",
  "receiptName": "",
  "sName": "Билайн Узбекистан",
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
                  "footer": "Внимание! Номер вводится в формате: 90xxxxxxx, 91xxxxxxx. Пример: 901067891",
                  "mask": "9<!^\\d+${8}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^[0-9]{8}$",
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