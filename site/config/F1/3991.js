UIProvider = {
    "curId": "643", "curNom": "RUB",
    
  "round_math":"~1",
  "grpId": "100002",
  "id": "3991",
  "logo": "3991.gif",
  "receiptName": "",
  "sName": "Мир Теней",
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
                    "header": "Введите ID персонажа",
                  "footer": "",
                  "mask": "<!^\\d+${1,255}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,255}$",
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