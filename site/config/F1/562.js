UIProvider = {
    "curId": "643", "curNom": "RUB",
    
  "round_math":"~1",
  "grpId": "100002",
  "id": "562",
  "logo": "562.gif",
  "receiptName": "",
  "sName": "Carnage.ru",
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
                    "header": "¬ведите номер лицевого счета",
                  "footer": "",
                  "mask": "<!^\\d+${10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{10}$",
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