import {atomWithStorage, createJSONStorage }  from "jotai/utils"
import { Atom } from "jotai"
import AsyncStorage from '@react-native-async-storage/async-storage'


const storage = createJSONStorage(() => AsyncStorage)

export const ActiveUserAtom = atomWithStorage("ActiveUser",null,storage)