UIProvider = {
    "curId": "643", "curNom": "RUB",
    
  "round_math":"~1",
  "grpId": "100001",
  "id": "6002",
  "logo": "6002.gif",
  "receiptName": "",
  "sName": "Turkcell",
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
                    "header": "Введите телефон",
                  "footer": "",
                  "mask": "<!^\\d+${1,20}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,20}$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "AL",
                  "type": "keyboard"
                },

                {
                  "pageId" : "6582",
                  "title" : "Выберите вариант оплаты:",
                  "__objects" : [
                    {
                      "__type" : "controls",
                      "__objects" : [
                        {
                          "disp_name" : "disp1",
                          "disp_type": "_extra_",
                          "header" : "7$:",
                          "mask" : "<!^.+${1,100}>",
                          "name": "extra_7",
                          "nobr" : "false",
                          "regexp" : "^.+$",
                          "strip" : "false",
                          "type" : "disp_button",
                          "visible" : "true"
                        },
                        {
                          "disp_name": "disp2",
                          "disp_type": "_extra_",
                          "header": "15$",
                          "mask": "<!^.+${1,100}>",
                          "name": "extra_15",
                          "nobr": "false",
                          "regexp": "^.+$",
                          "strip": "false",
                          "type": "disp_button",
                          "visible": "true"
                        },

                        {
                          "disp_name": "disp3",
                          "disp_type": "_extra_",
                          "header": "30$",
                          "mask": "<!^.+${1,100}>",
                          "name": "extra_30",
                          "nobr": "false",
                          "regexp": "^.+$",
                          "strip": "false",
                          "type": "disp_button",
                          "visible": "true"
                        },
                      ]
                    }
                  ]
                },
              ]
            }
          ]
        }
      ]
    }
  ]
}