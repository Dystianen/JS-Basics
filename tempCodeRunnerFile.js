
                function food(name, language){
                    if(language === "english"){
                        return `good morning ${name}`
                    } else if(language === "french"){
                        return `good afternoon ${name}`
                    } else if(language === "Indonesia") {
                        return `good night ${name}`
                    }else{
                        return `good bye ${name}`
                    }
                }
                let result = food("adis", "jawa");
                console.log(result);