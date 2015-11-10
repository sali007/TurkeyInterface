UIProvider = {
    "curId": "860", "curNom": "UZS",
  "grpId": "1000014",
  "id": "200232",
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
                  "footer": "",
                  "mask": "+998<!^\\d+${9}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^((90[0-9]{7})|(91[0-9]{7}))$",
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