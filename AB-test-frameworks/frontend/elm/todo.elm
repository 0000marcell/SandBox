import Html exposing (..)
import Html.Events exposing (onClick)

main = 
  Html.program
    { model = model,
      view = view,
      update = update,
      subscriptions = subscriptions
    }

subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.none

type Msg 
  = createTodo String
  | newTodo String 
  

type alias Model = List
model =
  { newTodo = "", 
    todos = [{id = 1, name = "buy socks"}, 
             {id = 2, name = "buy things"}]
  }

update : Msg -> Model
update msg model =
  case msg of
    createTodo -> 
      { model | todos = model.newTodo :: model.todos }
    newTodo ->
      { model | newTodo = newTodo }

view : Model -> Html Msg
view model =
  div []
    [ input [ type_ "text", placeholder "Name"
              , onInput newTodo] []
     , button [onClick createTodo] [text "add"] 
     , ul [] List.map 
              (\item -> li [] [ text (toString item.name) ]) 
              (model.todos)
    ]
