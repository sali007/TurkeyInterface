UIProvider = {
    "curId": "643", "curNom": "AMD",
  "grpId": "100004",
  "id": "300016",
  "logo": "300016.gif",
  "receiptName": "",
  "sName": "MTC Армения(постоплата)",
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
                  "footer": "",
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