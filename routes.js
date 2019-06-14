define([], function () {
    return [
        {
            path: '/',
            component: view('home')
        },
        {
            path: '/center-information',
            component: view('default'),
            meta: {
                breadcrumb: 'Center Information'
            },
            children: [
                {   
                    path: '',
                    component: view('center_information'),
                    name: 'center-info'
                },
                {
                    path: '/contact-us',
                    component: view('default'),
                    children: [
                        {
                            path: '',
                            component: view('contact'),
                            meta: {
                                breadcrumb: 'Contact Us'
                            },
                            name: 'contact'
                        }
                    ]
                },
                {
                   path: '/jobs',
                   component: view('default'),
                   meta: {
                      breadcrumb: 'Jobs'
                   },
                   children: [
                      {
                         path: '',
                         component: view('jobs'),
                         name: 'jobList'
                      },
                      {
                         path: ':id',
                         component: view('job_details'),
                         meta: {
                            breadcrumb: 'Jobs'
                         },
                         name: 'jobDetails',
                         props: true
                      }
                   ]
                },
                {
                    path: '/coupons',
                    component: view('default'),
                    meta: {
                        breadcrumb: 'Coupons',
                    },
                    children: [
                        {
                            path: '',
                            component: view('coupons'),
                            
                            name: 'coupons'
                        },
                        {
                            path: '/coupons/my-basket',
                            component: view('default'),
                            children: [
                                {
                                    path: '',
                                    component: view('coupon_basket'),
                                    meta: {
                                        breadcrumb: 'My Basket',
                                    },
                                    name: 'couponBasket',
                                    props: true
                                }
                            ]
                        },
                        {
                            path: ':id',
                            component: view('coupons_details'),
                            meta: {
                                breadcrumb: 'Coupon Details',
                            },
                            name: 'couponDetails',
                            props: true
                        }
                    ]
                },
                // {
                //     path: '/leasing',
                //     component: view('default'),
                //     children: [
                //         {
                //             path: '',
                //             component: view('leasing'),
                //             meta: {
                //                 breadcrumb: 'Leasing'
                //             },
                //             name: 'leasing'
                //         }
                //     ]
                // },
                {
                    path: '/specialty-leasing',
                    component: view('default'),
                    children: [
                        {
                            path: '',
                            component: view('specialty_leasing'),
                            meta: {
                                breadcrumb: 'Specialty Leasing'
                            },
                            name: 'specialtyLeasing'
                        }
                    ]
                },
                {
                    path: '/newsletter',
                    component: view('default'),
                    children: [
                        {
                            path: '',
                            component: view('newsletter'),
                            meta: {
                                breadcrumb: 'Newsletter Sign-Up',
                            },
                            name: 'newsletter'
                        }
                    ]
                },
            ]
        },
        {
            path: '/contest',
            component: view('default'),
            meta: {
                breadcrumb: 'Contest',
            },
            children: [
                {
                    path: '',
                    component: view('contest'),
                    name: 'contest'
                }
            ]
        },
        {
            path: '/events-and-promotions',
            component: view('default'),
            meta: {
                breadcrumb: 'Events & Promotions',
            },
            children: [
                {
                    path: '',
                    component: view('events_and_promotions'),
                    name: 'events_and_promotions'
                }
            ]
        },
        {
            path: '/location',
            component: view('default'),
            meta: {
                breadcrumb: 'Location'
            },
            children: [
                {   
                    path: '',
                    component: view('location'),
                    name: 'location'
                }
            ]
        },
        {
            path: '/pages',
            component: view('default'),
            children: [
                {
                    path: ':id',
                    component: view('page_details'),
                    meta: {
                        breadcrumb: 'Page Details',
                    },
                    name: 'pageDetails',
                    props: true
                }
            ]
        },
        {
            path: '/stores',
            component: view('default'),
            meta: {
                breadcrumb: 'Directory',
            },
            children: [
                {   
                    path: '',
                    component: view('stores'),
                    name: 'storeList'
                },
                {
                    path: ':id',
                    component: view('store_details'),
                    meta: {
                        breadcrumb: 'Store Details',
                    },
                    name: 'storeDetails',
                    props: true
                },
                {
                    path: '/dine',
                    component: view('default'),
                    children: [
                        {   
                            path: '',
                            component: view('dine'),
                            meta: {
                                breadcrumb: 'Dining',
                            },
                            name: 'dine'
                        }
                    ]
                },
                {
                    path: '/map',
                    component: view('default'),
                    children: [
                        {   
                            path: '',
                            component: view('map'),
                            meta: {
                                breadcrumb: 'Centre Map',
                            },
                            name: 'map'
                        }
                    ]
                },
            ]
        },
        {
            path: '/posts',
            component: view('default'),
            meta: {
                breadcrumb: 'Blog',
            },
            children: [
                {
                    path: '',
                    component: view('posts'),
                    name: 'posts'
                },
                {
                    path: ':id',
                    component: view('posts_details'),
                    meta: {
                        breadcrumb: 'Blog Details',
                    },
                    name: 'postsDetails',
                    props: true
                }
            ]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]

    /*
    * Asynchronously load view (lazy-loading)
    * @param {string} name the filename (basename) of the view to load.
    */
    function view(name) {
        return function(resolve) { require(['vue!' + name + '.vue'], resolve); }
    }
});
