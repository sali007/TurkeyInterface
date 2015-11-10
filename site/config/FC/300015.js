UIProvider = {
    "curId": "643", "curNom": "AMD",
  "grpId": "100004",
  "id": "300015",
  "logo": "2380.gif",
  "receiptName": "",
  "sName": "MTS Armenia",
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
                  "footer": "Внимание! Номер вводится в формате 93xxxxxx , 94xxxxxx , 98xxxxxx , 77xxxxxx , 60xxxxxx . Пример : 94857928",
                  "mask": "<!^\\d+${8}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^((93[0-9]{6})|(94[0-9]{6})|(98[0-9]{6})|(77[0-9]{6}|(60[0-9]{6})))$",
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