UIProvider = {
    "curId": "643", "curNom": "AMD",
  "grpId": "100004",
  "id": "300013",
  "logo": "4168.gif",
  "receiptName": "",
  "sName": "Orange Армения",
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
                  "header": "Введите Ваш номер",
                  "footer": "Внимание! Номер вводится в формате 055xxxxxx , 095xxxxxx , 041xxxxxx . Пример : 055182229",
                  "mask": "<!^\\d+${9}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^((055[0-9]{6})|(095[0-9]{6}))$",
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