import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "87591e5105dd42e68d838e749dfd6095"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "52109013bf7348399160078eac9efa85"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "56e44fd7b798486d89b48e257ce7f782"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "82e04a9716fb4fb08099dfb1d94a6ab0"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "0da0b96ec38a486cb1c82b47479f23fe",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "78ab2e72cd7f47cca898b933c681d8b1",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "caa30167d6454e9fbd988f7dd5e3be39",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
