UIProvider = {
    "curId": "643", "curNom": "AMD",
  "grpId": "100004",
  "id": "300014",
  "logo": "2373.gif",
  "receiptName": "",
  "sName": "Билайн Армения",
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
                  "footer": "Внимание! Номер вводится в формате 91xxxxxx, 96xxxxxx, 99xxxxxx . Пример : 91756441",
                  "mask": "<!^\\d+${8}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{8}$",
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