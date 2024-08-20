export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'icon-group',
    children: [

      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/home',
        icon: 'feather icon-home'
      },
      {
        id: 'Rapport_list',
        title: 'Rapport list',
        type: 'collapse',
        url: '/rapport-management',
        icon: 'feather icon-settings',
        children: [
          {
            id: 'my_ooredoo_app',
            title: 'My ooredoo App',
            type: 'item',
            url: '/rappot/my-ooredoo-list'
          },
          {
            id: 'reported-data-list',
            title: 'Reported Data volume ',
            type: 'item',
            url: '/rappot/reported-data-list'
          },{
            id: 'vol-data-list',
            title: 'Volume data ',
            type: 'item',
            url: '/rappot/vol-data-list'
          }
          
        ]
      }
      

     

    ]

  },
  {
    id: 'settings',
    title: 'Settings',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'user-management',
        title: 'Users Management',
        type: 'collapse',
        icon: 'feather icon-users',
        children: [
          {
            id: 'users-list',
            title: 'Users List',
            type: 'item',
            url: '/user/users-list'
          },
          {
            id: 'add-user',
            title: 'New User',
            type: 'item',
            url: '/user/create-user'
          }
        ]
      },
      {
        id: 'role-management',
        title: 'Role Management',
        type: 'collapse',
        url: '/rapport-management',
        icon: 'feather icon-settings',
        children: [
          {
            id: 'role-list',
            title: 'Role List',
            type: 'item',
            url: '/role/role-list'
          },
          {
            id: 'add-role',
            title: 'Add Role',
            type: 'item',
            url: '/role/add-role'
          }
        ]
      },


      
      
    ]
  },






];
