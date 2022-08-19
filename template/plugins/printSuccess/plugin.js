const { green, blue } = require('kleur')

module.exports = {
  async apply(value, previousValues) {
    return new Promise(resolve => {
      console.log('\n')
      console.log(
        'Atomspace React-Native Boilerplate initialized with success ! 🚀\n',
      )
      console.log(green(`
                                                                                                 .=#@@#
                                                                                                :#@@@@@@*
                                                                                              .#@@@@%***#
                                                                                             +@@@#=.
                                                                                           :%@@*.
                                                                                          +@@+.       :+*#*+-
                                                    ..                                  .%@#.       :%@@@@@@@@=
                                                  #@@@@%#+-    ..                      -@@-        .ATOMSPACE@@+
                                                  @@@@@@@@%  *@@@@*                   *@+          +ATOMSPACE@@%
                                                  -@=::::-: +@@@@@@*                .%%:           -ATOMSPACE@@*
                                                            :@@@@@@- .             :@*              +ATOMSPACE#
                                                             .=**+. .@%+.     .-+*%@@@@@@@%#+-.      .+%@@@%*-
                                                                      :+%%=-*ATOMSPACEATOMSPACE@*-
                                                                        .*ATOMSPACEATOMSPACE@@@@@@@+.
                                                                       +ATOMSPACEATOMSPACEATOMSPACE@@*
                                                                     :ATOMSPACEATOMSPACEATOMSPACE@@@@@@-
                                                                    =ATOMSPACEATOMSPACEATOMSPACE@@@@@@@@=                  :=-.
                                                                   =ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@=                   #@@+
                                                                  .ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@@@:                 .%@@*
                                                                  #ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@@@#               .+@@*:
                                                        :::..     ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@@@@@.           .=*#=:
                                                  :=++=:         :ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@@@@@-        :-==.
                                             .=*%#=:             :ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@@@@@-     ...
                                          -*@@%=                 .ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@@@@@.
                                       .*@@@@-                    %ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@@@%
                                       %@@@@=                     -ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@@@-
                                       .+#%@%-.                    *ATOMSPACEATOMSPACEATOMSPACEATOMSPACE@*
                                             .:.                   =#ATOMSPACEATOMSPACEATOMSPACE@@@@@@@@#
                                                                  :+ +ATOMSPACEATOMSPACEATOMSPACE@@@@@@+
                                                                  #   :%ATOMSPACEATOMSPACE@@@@@%#%@@@%:
                                                                 *:     =%ATOMSPACE@@@@@@@@%=.  .  .-
                                                                -*        :*ATOMSPACE@@@@@* .*@@@@%+.
                                                                @.           :=*%@@@@@@@@# .ATOMSPACE.
                                                               *#                 .::---:. =ATOMSPACE-
                                                              ::.                          .ATOMSPACE. #%*=:         :
                                                            +@@@@*                          .*@@@@@+.   .=#@@@#*+++*@%
                                                           .@@@@@@-          ..                 .           :=*%@@@@@%
                                                            +@@@@*         .+.                                   .::.
                                                            .:::.        .**
                                                            *@@@*     .=#@=
                                                            @@@@@%***%@@#.
                                                           .ATOMSPACE@@-
                                                           .ATOMSPACE+
                                                            @@@@@@@+.
                                                            -%@@#=
`))

      console.log(blue(`

                                       █████╗ ████████╗ ██████╗ ███╗   ███╗    ███████╗██████╗  █████╗  ██████╗███████╗
                                      ██╔══██╗╚══██╔══╝██╔═══██╗████╗ ████║    ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝
                                      ███████║   ██║   ██║   ██║██╔████╔██║    ███████╗██████╔╝███████║██║     █████╗
                                      ██╔══██║   ██║   ██║   ██║██║╚██╔╝██║    ╚════██║██╔═══╝ ██╔══██║██║     ██╔══╝
                                      ██║  ██║   ██║   ╚██████╔╝██║ ╚═╝ ██║    ███████║██║     ██║  ██║╚██████╗███████╗
                                      ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝    ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝╚══════╝

`))
      if (previousValues.typescript) {
        console.log(blue('THE TYPESCRIPT VERSION 📘'))
      }
      console.log('\n')

      console.log(
        '- 📚 If you need to read more about this boilerplate : https://VaheSaroyan.github.io/rn-boilerplate/',
      )
      console.log(
        '- 🤕 If you have some troubles : https://github.com/VaheSaroyan/rn-boilerplate/issues',
      )
      console.log(
        '- ⭐ If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :) https://github.com/VaheSaroyan/rn-boilerplate',
      )
      resolve()
    })
  },
}
