UIProvider = {
    "curId": "417", "curNom": "KGS",
    
  "round_math":"~1",
  "grpId": "1000010",
  "id": "5133",
  "logo": "5133.gif",
  "receiptName": "",
  "sName": "Nexi",
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
                    "footer": "Номер телефона вводится в формате 996(XXX)XXXXXX",
                    "mask": "996<!^\\d+${3}><!^\\d+${6}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{9}$",
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