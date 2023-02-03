## TOPICS TO COVER
1. VARIABLES - var, let, const
2. DATA TYPES - number, bigInt, string, bool, null, undefined, symbol, object
3. FUNCTIONS - global vs local scope, parameters
4. ARROW FUNCTIONS

## THINGS TO CONSIDER
### Variables
- Proper naming
- Do not re-use existing variables
### Functions
- Descriptive naming
- Descriptive parameters
- JSDocs
### Arrow functions
- Cannot behave like constructors (no `new` keyword)
- Arguments binding
- `this`

### Task
- Create simple NODE validator (DOM Node) by using Function.
- It will accept single node as param
- Handle error / success
- Print the state in console
```javascript
function MyInputValidator (node) {
  onError() {}
  onSuccess() {}
  printMessage () {}
  init () {}
}
// example for single node
node = {
  id: 'element-id',
  acceptedConditions: {
    maxLength: {
      value: Number,
      errorMessage: String,
      successMessage: String,
    },
    minLength: {
      value: Number,
      errorMessage: String,
      successMessage: String,
    }
  }
}

// example call
const myValidator = new MyInputValidator(node)
myValidator.init()
```
