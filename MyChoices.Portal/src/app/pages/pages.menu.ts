export const PAGES_MENU = [
    {
        path: 'pages',
        children: [
            {
                path: 'dashboard',
                data: {
                    menu: {
                        title: 'Dashboard',
                        icon: 'ion-android-home',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
            },
            {
                path: 'caseManagement',
                data: {
                    menu: {
                        title: 'Case Management',
                        icon: 'ion-clipboard',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
            },
            {
                path: 'charts',
                data: {
                    menu: {
                        title: 'Reports',
                        icon: 'ion-stats-bars',
                        selected: false,
                        expanded: false,
                        order: 200,
                    }
                },
                children: [
                    {
                        path: 'chartist-js',
                        data: {
                            menu: {
                                title: 'Annual',
                            }
                        }
                    }
                ]
            },
            {
                path: 'ui',
                data: {
                    menu: {
                        title: 'Misc1',
                        icon: 'ion-android-laptop',
                        selected: false,
                        expanded: false,
                        order: 300,
                    }
                },
                children: [
                    {
                        path: 'typography',
                        data: {
                            menu: {
                                title: 'Misc1-1',
                            }
                        }
                    },
                    {
                        path: 'buttons',
                        data: {
                            menu: {
                                title: 'Misc1-2',
                            }
                        }
                    },
                    {
                        path: 'icons',
                        data: {
                            menu: {
                                title: 'Misc1-3',
                            }
                        }
                    },
                    {
                        path: 'modals',
                        data: {
                            menu: {
                                title: 'Misc1-4',
                            }
                        }
                    },
                    {
                        path: 'grid',
                        data: {
                            menu: {
                                title: 'Misc1-5',
                            }
                        }
                    },
                ]
            },
            {
                path: 'forms',
                data: {
                    menu: {
                        title: 'Misc-2',
                        icon: 'ion-compose',
                        selected: false,
                        expanded: false,
                        order: 400,
                    }
                },
                children: [
                    {
                        path: 'inputs',
                        data: {
                            menu: {
                                title: 'Misc-2-1',
                            }
                        }
                    },
                    {
                        path: 'layouts',
                        data: {
                            menu: {
                                title: 'Misc-2-2',
                            }
                        }
                    }
                ]
            },
            {
                path: 'tables',
                data: {
                    menu: {
                        title: 'Misc-3',
                        icon: 'ion-grid',
                        selected: false,
                        expanded: false,
                        order: 500,
                    }
                },
                children: [
                    {
                        path: 'basictables',
                        data: {
                            menu: {
                                title: 'Misc-3-1',
                            }
                        }
                    },
                    {
                        path: 'smarttables',
                        data: {
                            menu: {
                                title: 'Misc-3-2',
                            }
                        }
                    }
                ]
            },
            {
                path: 'maps',
                data: {
                    menu: {
                        title: 'Misc4',
                        icon: 'ion-ios-location-outline',
                        selected: false,
                        expanded: false,
                        order: 600,
                    }
                },
                children: [
                    {
                        path: 'googlemaps',
                        data: {
                            menu: {
                                title: 'Misc4-1',
                            }
                        }
                    },
                    {
                        path: 'leafletmaps',
                        data: {
                            menu: {
                                title: 'Misc4-2',
                            }
                        }
                    },
                    {
                        path: 'bubblemaps',
                        data: {
                            menu: {
                                title: 'Misc4-3',
                            }
                        }
                    },
                    {
                        path: 'linemaps',
                        data: {
                            menu: {
                                title: 'Misc4-4',
                            }
                        }
                    }
                ]
            },
            {
                path: '',
                data: {
                    menu: {
                        title: 'Misc5',
                        icon: 'ion-document',
                        selected: false,
                        expanded: false,
                        order: 650,
                    }
                },
                children: [
                    {
                        path: ['/login'],
                        data: {
                            menu: {
                                title: 'Misc5-1'
                            }
                        }
                    },
                    {
                        path: ['/register'],
                        data: {
                            menu: {
                                title: 'Misc5-2'
                            }
                        }
                    }
                ]
            },
            {
                path: '',
                data: {
                    menu: {
                        title: 'Misc6',
                        icon: 'ion-ios-more',
                        selected: false,
                        expanded: false,
                        order: 700,
                    }
                },
                children: [
                    {
                        path: '',
                        data: {
                            menu: {
                                title: 'Misc6-1',
                                url: '#'
                            }
                        }
                    },
                    {
                        path: '',
                        data: {
                            menu: {
                                title: 'Misc6-2',
                                url: '#'
                            }
                        },
                        children: [
                            {
                                path: '',
                                data: {
                                    menu: {
                                        title: 'Misc6-3',
                                        url: '#'
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            {
                path: '',
                data: {
                    menu: {
                        title: 'Misc single link',
                        url: 'http://google.com',
                        icon: 'ion-android-exit',
                        order: 800,
                        target: '_blank'
                    }
                }
            }
        ]
    }
];
