"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var SafeERC20 = exports.SafeERC20 = 
{
  "contractName": "SafeERC20",
  "abi": [],
  "bytecode": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820659877c70186bbf3d512cebbc9e1e02853a4861946d910e93dcef9fccf844f0f0029",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820659877c70186bbf3d512cebbc9e1e02853a4861946d910e93dcef9fccf844f0f0029",
  "sourceMap": "364:445:52:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "364:445:52:-;;;;;;;;",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./StandardToken.sol\";\nimport \"../../interfaces/ERC20.sol\";\n\n\n/**\n * @title SafeERC20\n * @dev Wrappers around ERC20 operations that throw on failure.\n * To use this library you can add a `using SafeERC20 for ERC20;` statement to your contract,\n * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\n */\nlibrary SafeERC20 {\n  function safeTransfer(ERC20 _token, address _to, uint256 _value)\n  internal  {\n    require(_token.transfer(_to, _value));\n  }\n\n  function safeTransferFrom(ERC20 _token, address _from, address _to, uint256 _value)\n  internal  {\n    require(_token.transferFrom(_from, _to, _value));\n  }\n\n  function safeApprove(ERC20 _token, address _spender, uint256 _value)\n  internal  {\n    require(_token.approve(_spender, _value));\n  }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/ERC20/SafeERC20.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/ERC20/SafeERC20.sol",
    "exportedSymbols": {
      "SafeERC20": [
        20608
      ]
    },
    "id": 20609,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 20548,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:52"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/ERC20/StandardToken.sol",
        "file": "./StandardToken.sol",
        "id": 20549,
        "nodeType": "ImportDirective",
        "scope": 20609,
        "sourceUnit": 20943,
        "src": "26:29:52",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../../interfaces/ERC20.sol",
        "id": 20550,
        "nodeType": "ImportDirective",
        "scope": 20609,
        "sourceUnit": 18994,
        "src": "56:36:52",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title SafeERC20\n@dev Wrappers around ERC20 operations that throw on failure.\nTo use this library you can add a `using SafeERC20 for ERC20;` statement to your contract,\nwhich allows you to call the safe operations as `token.safeTransfer(...)`, etc.",
        "fullyImplemented": true,
        "id": 20608,
        "linearizedBaseContracts": [
          20608
        ],
        "name": "SafeERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 20567,
              "nodeType": "Block",
              "src": "463:48:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 20562,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20554,
                            "src": "493:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 20563,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20556,
                            "src": "498:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 20560,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20552,
                            "src": "477:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$18993",
                              "typeString": "contract ERC20"
                            }
                          },
                          "id": 20561,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 18956,
                          "src": "477:15:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 20564,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "477:28:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 20559,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21212,
                        21213
                      ],
                      "referencedDeclaration": 21212,
                      "src": "469:7:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 20565,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "469:37:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20566,
                  "nodeType": "ExpressionStatement",
                  "src": "469:37:52"
                }
              ]
            },
            "documentation": null,
            "id": 20568,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20552,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 20568,
                  "src": "408:12:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$18993",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20551,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 18993,
                    "src": "408:5:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$18993",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20554,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 20568,
                  "src": "422:11:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 20553,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "422:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20556,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 20568,
                  "src": "435:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20555,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "435:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "407:43:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 20558,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "463:0:52"
            },
            "scope": 20608,
            "src": "386:125:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 20588,
              "nodeType": "Block",
              "src": "611:59:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 20582,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20572,
                            "src": "645:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 20583,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20574,
                            "src": "652:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 20584,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20576,
                            "src": "657:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 20580,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20570,
                            "src": "625:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$18993",
                              "typeString": "contract ERC20"
                            }
                          },
                          "id": 20581,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 18976,
                          "src": "625:19:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 20585,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "625:39:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 20579,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21212,
                        21213
                      ],
                      "referencedDeclaration": 21212,
                      "src": "617:7:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 20586,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "617:48:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20587,
                  "nodeType": "ExpressionStatement",
                  "src": "617:48:52"
                }
              ]
            },
            "documentation": null,
            "id": 20589,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20577,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20570,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 20589,
                  "src": "541:12:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$18993",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20569,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 18993,
                    "src": "541:5:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$18993",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20572,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 20589,
                  "src": "555:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 20571,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "555:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20574,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 20589,
                  "src": "570:11:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 20573,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "570:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20576,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 20589,
                  "src": "583:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20575,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "583:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "540:58:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 20578,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "611:0:52"
            },
            "scope": 20608,
            "src": "515:155:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 20606,
              "nodeType": "Block",
              "src": "755:52:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 20601,
                            "name": "_spender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20593,
                            "src": "784:8:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 20602,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20595,
                            "src": "794:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 20599,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20591,
                            "src": "769:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$18993",
                              "typeString": "contract ERC20"
                            }
                          },
                          "id": 20600,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "approve",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 18965,
                          "src": "769:14:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 20603,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "769:32:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 20598,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21212,
                        21213
                      ],
                      "referencedDeclaration": 21212,
                      "src": "761:7:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 20604,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "761:41:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20605,
                  "nodeType": "ExpressionStatement",
                  "src": "761:41:52"
                }
              ]
            },
            "documentation": null,
            "id": 20607,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeApprove",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20596,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20591,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 20607,
                  "src": "695:12:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$18993",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20590,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 18993,
                    "src": "695:5:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$18993",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20593,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 20607,
                  "src": "709:16:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 20592,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "709:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20595,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 20607,
                  "src": "727:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20594,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "727:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "694:48:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 20597,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "755:0:52"
            },
            "scope": 20608,
            "src": "674:133:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 20609,
        "src": "364:445:52"
      }
    ],
    "src": "0:810:52"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/ERC20/SafeERC20.sol",
    "exportedSymbols": {
      "SafeERC20": [
        20608
      ]
    },
    "id": 20609,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 20548,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:52"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/ERC20/StandardToken.sol",
        "file": "./StandardToken.sol",
        "id": 20549,
        "nodeType": "ImportDirective",
        "scope": 20609,
        "sourceUnit": 20943,
        "src": "26:29:52",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../../interfaces/ERC20.sol",
        "id": 20550,
        "nodeType": "ImportDirective",
        "scope": 20609,
        "sourceUnit": 18994,
        "src": "56:36:52",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title SafeERC20\n@dev Wrappers around ERC20 operations that throw on failure.\nTo use this library you can add a `using SafeERC20 for ERC20;` statement to your contract,\nwhich allows you to call the safe operations as `token.safeTransfer(...)`, etc.",
        "fullyImplemented": true,
        "id": 20608,
        "linearizedBaseContracts": [
          20608
        ],
        "name": "SafeERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 20567,
              "nodeType": "Block",
              "src": "463:48:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 20562,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20554,
                            "src": "493:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 20563,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20556,
                            "src": "498:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 20560,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20552,
                            "src": "477:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$18993",
                              "typeString": "contract ERC20"
                            }
                          },
                          "id": 20561,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 18956,
                          "src": "477:15:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 20564,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "477:28:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 20559,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21212,
                        21213
                      ],
                      "referencedDeclaration": 21212,
                      "src": "469:7:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 20565,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "469:37:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20566,
                  "nodeType": "ExpressionStatement",
                  "src": "469:37:52"
                }
              ]
            },
            "documentation": null,
            "id": 20568,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20552,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 20568,
                  "src": "408:12:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$18993",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20551,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 18993,
                    "src": "408:5:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$18993",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20554,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 20568,
                  "src": "422:11:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 20553,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "422:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20556,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 20568,
                  "src": "435:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20555,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "435:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "407:43:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 20558,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "463:0:52"
            },
            "scope": 20608,
            "src": "386:125:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 20588,
              "nodeType": "Block",
              "src": "611:59:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 20582,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20572,
                            "src": "645:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 20583,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20574,
                            "src": "652:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 20584,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20576,
                            "src": "657:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 20580,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20570,
                            "src": "625:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$18993",
                              "typeString": "contract ERC20"
                            }
                          },
                          "id": 20581,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 18976,
                          "src": "625:19:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 20585,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "625:39:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 20579,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21212,
                        21213
                      ],
                      "referencedDeclaration": 21212,
                      "src": "617:7:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 20586,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "617:48:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20587,
                  "nodeType": "ExpressionStatement",
                  "src": "617:48:52"
                }
              ]
            },
            "documentation": null,
            "id": 20589,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20577,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20570,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 20589,
                  "src": "541:12:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$18993",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20569,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 18993,
                    "src": "541:5:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$18993",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20572,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 20589,
                  "src": "555:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 20571,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "555:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20574,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 20589,
                  "src": "570:11:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 20573,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "570:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20576,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 20589,
                  "src": "583:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20575,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "583:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "540:58:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 20578,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "611:0:52"
            },
            "scope": 20608,
            "src": "515:155:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 20606,
              "nodeType": "Block",
              "src": "755:52:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 20601,
                            "name": "_spender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20593,
                            "src": "784:8:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 20602,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20595,
                            "src": "794:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 20599,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20591,
                            "src": "769:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$18993",
                              "typeString": "contract ERC20"
                            }
                          },
                          "id": 20600,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "approve",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 18965,
                          "src": "769:14:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 20603,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "769:32:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 20598,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21212,
                        21213
                      ],
                      "referencedDeclaration": 21212,
                      "src": "761:7:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 20604,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "761:41:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20605,
                  "nodeType": "ExpressionStatement",
                  "src": "761:41:52"
                }
              ]
            },
            "documentation": null,
            "id": 20607,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeApprove",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20596,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20591,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 20607,
                  "src": "695:12:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$18993",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20590,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 18993,
                    "src": "695:5:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$18993",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20593,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 20607,
                  "src": "709:16:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 20592,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "709:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20595,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 20607,
                  "src": "727:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20594,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "727:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "694:48:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 20597,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "755:0:52"
            },
            "scope": 20608,
            "src": "674:133:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 20609,
        "src": "364:445:52"
      }
    ],
    "src": "0:810:52"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-09-08T14:16:35.350Z"
}