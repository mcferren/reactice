APP to demonstrate and map MVC analogies to ai theory, patterns, uml, and api

DEMO HERE: http://seasidesyndication.com/reactice/index.html


STEP 1 ** COMPLETE **
- animate CSS3 characters on a stage canvas for a happy and sad emotion
- React Classes piping arguments and functions to set emotion state of character
- bind Click event to toggle emotion of each character by firing the above mentioned function


STEP 2 ** TODO TBA **
- install React Router
- make use of React fetching features to access Wit.ai api
- decouple more features from css and make the characters more modular by adding js and css and images to same folders
- bind Draggable and Droppable handlers
- instantiate more emotion objects



- ReactiveApp
  - HappyObjects
    - SourceObjects
      - CharacterObject
        - PathNodeFrameObject (Clickable -> onMouseDown -> changeEmotionState)
    - DropTargets
      - DropTarget
    - BackgroundObjects
      - BackgroundCharacterObjects
  - SadObjects
    - SourceObjects
      - CharacterObject
        - PathNodeFrameObject (Clickable -> onMouseDown -> changeEmotionState)
    - DropTargets
      - DropTarget
    - BackgroundObjects
      - BackgroundCharacterObjects


DOM REPRESENTATION:

  <div class="stage" data-reactid=".0">
    <div class="happy" data-reactid=".0.0">
      <div class="cast" data-reactid=".0.0.0">
        <div class="invisible character mouse" data-reactid=".0.0.0.0">
          <div class="mickey zero headline" data-reactid=".0.0.0.0.0">
            <div data-reactid=".0.0.0.0.0.0">
              happy mickey
            </div>
          </div>
        </div>

        <div class="visible character mouse" data-reactid=".0.0.0.1">
          <div class="mini zero headline" data-reactid=".0.0.0.1.0">
            <div data-reactid=".0.0.0.1.0.0">
              happy mini
            </div>
          </div>
        </div>

        <div class=" invisible character duck" data-reactid=".0.0.0.2">
          <div class="donald zero headline" data-reactid=".0.0.0.2.0">
            <div data-reactid=".0.0.0.2.0.0">
              happy donald
            </div>
          </div>
        </div>

        <div class=" visible character duck" data-reactid=".0.0.0.3">
          <div class="daisy zero headline" data-reactid=".0.0.0.3.0">
            <div data-reactid=".0.0.0.3.0.0">
              happy daisy
            </div>
          </div>
        </div>
      </div>

      <div class="emotionlist" data-reactid=".0.0.1">
        <div class="dnd-drop-target" data-reactid=".0.0.1.0"></div>
      </div>

      <div class="background-setting" data-reactid=".0.0.2">
        <div class="background-character" fill="#000000" d="" data-reactid=".0.0.2.0">
        </div>
      </div>
    </div>

    <div class="sad" data-reactid=".0.1">
      <div class="cast" data-reactid=".0.1.0">
        <div class=" visible character mouse" data-reactid=".0.1.0.0">
          <div class="mickey zero headline" data-reactid=".0.1.0.0.0">
            <div data-reactid=".0.1.0.0.0.0">
              sad mickey
            </div>
          </div>
        </div>

        <div class=" invisible character mouse" data-reactid=".0.1.0.1">
          <div class="mini zero headline" data-reactid=".0.1.0.1.0">
            <div data-reactid=".0.1.0.1.0.0">
              sad mini
            </div>
          </div>
        </div>

        <div class=" visible character duck" data-reactid=".0.1.0.2">
          <div class="donald zero headline" data-reactid=".0.1.0.2.0">
            <div data-reactid=".0.1.0.2.0.0">
              sad donald
            </div>
          </div>
        </div>

        <div class=" invisible character duck" data-reactid=".0.1.0.3">
          <div class="daisy zero headline" data-reactid=".0.1.0.3.0">
            <div data-reactid=".0.1.0.3.0.0">
              sad daisy
            </div>
          </div>
        </div>
      </div>

      <div class="emotionlist" data-reactid=".0.1.1">
        <div class="dnd-drop-target" data-reactid=".0.1.1.0"></div>
      </div>

      <div class="background-setting" data-reactid=".0.1.2">
        <div class="background-character" fill="#000000" d="" data-reactid=".0.1.2.0">
        </div>
      </div>
    </div>
  </div>