
UIProvider ={"curId":"643","curNom":"RUB",
    "grpId": "100001",
    "id": "110",
    "logo": "110.gif",
    "receiptName": "",
    "sName": "SMS Дневник",
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
                                    "header": "Номер счета",
                                    "footer": "Введите ваш номер счета",
                                    "mask": "<!^\\w+${10}>",
                                    "name": "account",
                                    "nobr": "false",
                                    "regexp": "^\\w{10}$",
                                    "strip": "True",
                                    "type": "text_input"
                                },
                                {
                                    "layout": "AL",
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