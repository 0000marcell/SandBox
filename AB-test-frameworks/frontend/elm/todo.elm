import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import List
import Debug

main =
  Html.beginnerProgram
    { model = model
    , view = view
    , update = update
     }


  
type alias Model = 
  { newTodo : String, 
    todos : List { id : String, name : String  }  
  }
model : Model
model =
  { newTodo = "", 
    todos = [{id = "1", name = "buy socks"}, 
             {id = "2", name = "buy things"}]
  }

type Msg 
  = CreateTodo
  | NewTodo String 
  | RemoveTodo String
  | Test
update : Msg -> Model -> Model
update msg model =
  case msg of
    CreateTodo -> 
      { model | todos = {
        id = (toString (List.length model.todos + 1)), 
        name = model.newTodo} :: model.todos 
      }
    NewTodo newTodo ->
      { model | newTodo = newTodo }
    RemoveTodo id ->
      {model | todos = List.filter(\item -> item.id /= id)
                        (model.todos)
      }
    Test ->
      Debug.log (toString model)
      model
      

view : Model -> Html Msg
view model =
  div []
    [ input [ onInput NewTodo ] []
    , button [ onClick CreateTodo ] [ text "add" ]
    , ul [] (List.map (\item -> listItem item.name) (model.todos))
    ]

listItem : String -> Html Msg
listItem name = 
  li [] [
    text name, button [onClick Test] [ text "remove" ]
  ]
