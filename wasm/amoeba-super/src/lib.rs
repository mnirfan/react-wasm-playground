mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

// #[wasm_bindgen]
// extern {
//     fn alert(s: &str);
// }

// #[wasm_bindgen]
// pub fn greet() {
//     alert("Hello, wasm-game-of-life!");
// }

#[wasm_bindgen]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub struct Square {
    width: u32,
    height: u32,
}

#[wasm_bindgen]
impl Square {
    pub fn new(width: u32, height: u32) -> Square {
        Square {
            width,
            height,
        }
    }
    pub fn area(&self) -> usize {
        (self.width * self.height) as usize
    }
}
