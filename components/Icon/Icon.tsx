import * as icons from '@expo/vector-icons'

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
export function Icon({
  lib = 'FontAwesome5',
  ...rest
}: {
  name:
    | React.ComponentProps<typeof icons.Foundation>['name']
    | React.ComponentProps<typeof icons.FontAwesome5>['name']
    | React.ComponentProps<typeof icons.AntDesign>['name']
    | React.ComponentProps<typeof icons.Entypo>['name']
    | React.ComponentProps<typeof icons.EvilIcons>['name']
    | React.ComponentProps<typeof icons.Ionicons>['name']
    | React.ComponentProps<typeof icons.MaterialCommunityIcons>['name']
  lib?:
    | 'Foundation'
    | 'FontAwesome5'
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
  color?: string
  size?: number
  style?: React.ComponentProps<typeof icons.FontAwesome5>['style']
}) {
  const Library = icons[lib]
  return (
    <Library size={rest.size || 20} color={rest.color || 'white'} {...rest} />
  )
}
