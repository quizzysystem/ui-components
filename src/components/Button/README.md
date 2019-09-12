Button primary
```javascript
    <Button label="Normal">
        Normal
    </Button>
```

Button primary, small
```javascript
    <Button size="xs" label="Normal">
        Normal
    </Button>
```

Button primary, middle
```javascript
    <Button size="md" label="Normal">
        Normal
    </Button>
```
Button secondary, with icon
```javascript
    import loginIcon from '../../assets/icons/login.svg';

    <Button mode="secondary" label="Normal" icon={loginIcon}>
        Normal
    </Button>
```
Button yellow, with icon, reverse
```javascript
    import loginIcon from '../../assets/icons/login.svg';

    <Button mode="yellow" icon={loginIcon} label="Normal" reverse>
        Normal
    </Button>
```

Button transparent
```javascript
    <Button transparent label="Normal">
        Normal
    </Button>
```
Button green
```javascript
    <Button mode="green" label="Normal">
        Normal
    </Button>
```

Button yellow
```javascript
    <Button mode="yellow" label="Normal">
        Normal
    </Button>
```

Button red
```javascript
    <Button mode="red" label="Normal">
        Normal
    </Button>
```

Button black
```javascript
    <Button mode="black" label="Normal">
        Normal
    </Button>
```

Button white
```javascript
<div style={{ backgroundColor: '#e2e0e0', padding: '20px' }}>
  <Button mode="white" label="Normal">
    Normal
  </Button>
</div>
    
```

Button red, disabled
```javascript
    <Button mode="red" disabled label="Normal">
        Normal
    </Button>
```

Button secondary, square, with sm icon, width auto
```javascript
    import loginIcon from '../../assets/icons/login.svg';

    <Button 
      mode="secondary"
      format="square"
      widthAuto 
      iconSize="sm"
      icon={loginIcon}
      label="Normal"
    />
```

Button transparent, circle, width auto
```javascript
    <Button transparent format="circle" label="Normal" widthAuto>
        N
    </Button>
```

Button green, full width
```javascript
    <Button mode="green" label="Normal" fullWidth>
        Normal
    </Button>
```

Button green, full width, align left
```javascript
    <Button mode="green" label="Normal" fullWidth alignLeft>
        Normal
    </Button>
```