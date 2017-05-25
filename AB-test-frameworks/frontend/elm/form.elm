import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)
import Regex exposing (regex, contains)

main =
  Html.beginnerProgram { model = model, 
                         view = view,
                         update = update}

-- Model
type alias Model =
  { name : String
  , password : String
  , passwordAgain : String
  }

model : Model
model =
  Model "" "" ""

-- Update

type Msg
  = Name String
  | Password String
  | PasswordAgain String

update : Msg -> Model -> Model

update msg model =
  case msg of
    Name name -> 
      {model | name = name}
    Password password -> 
      {model | password = password}
    PasswordAgain password -> 
      {model | passwordAgain = password}

-- View

view : Model -> Html Msg
view model =
  div []
    [ input [ type_ "text", placeholder "Name",
              onInput Name ] [] 
    , input [   type_ "password"
              , placeholder "Password"
              , onInput Password ] []
    , input [ type_ "password", 
              placeholder "Re-enter Passowrd",
              onInput PasswordAgain] []
    , viewValidation model
    ]

upperCaseLetter = regex "[A-Z]"

viewValidation : Model -> Html msg
viewValidation model =
  let
    (color, message) =
      if model.password /= model.passwordAgain then
        ("red", "Passwords do not match!")
      else if String.length model.password < 8 then
        ("red", "Password needs to be bigger than 8 characters!")
      else if contains upperCaseLetter model.password /= True then
        ("red", "Password needs to contain at least one uppercase letter") 
      else
        ("green", "OK")
  in
    div [ style [("color", color)] ] [ text message ]
