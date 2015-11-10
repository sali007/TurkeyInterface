UIProvider = {
    "curId": "417", "curNom": "KGS",
    
  "round_math":"~1",
  "grpId": "1000010",
  "id": "5135",
  "logo": "5135.gif",
  "receiptName": "",
  "sName": "Билайн",
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
                    "header": "Введите номер телефона",
                    "footer": "Пример : 996777609905",
                    "mask": "99677<!^\\d+${7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{12}$",
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