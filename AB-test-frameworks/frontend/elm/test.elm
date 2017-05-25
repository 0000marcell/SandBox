import Html exposing (..)
import Regex exposing (regex, contains)

main =
  Html.beginnerProgram { model = "marcellA", view = view,
                         update = update }

upperCaseLetter = regex "[A-Z]"

type Msg = Test

update msg model = 
  ""

view model =
  div [] 
  [
    text (toString (contains upperCaseLetter model))
  ]




