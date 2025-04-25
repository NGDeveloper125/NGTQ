use std::sync::{Arc, Mutex};
pub use ngtq_error::{ NGTQError, NGTQErrorType };
mod ngtq_error;

pub trait NGTQ {
    /// Returns an instance of your TaskQueue wrapped in Arc<Mutex<>>
    fn initialise() -> Arc<Mutex<Self>> where Self: Sized;

    /// Returns the current number of tasks in the ID queue
    /// 
    /// # Errors
    /// 
    /// Returns `NGTQError` if there was an issue accessing the queue
    fn get_id_queue_len(&self) -> Result<usize, NGTQError>;

    /// Returns the current number of tasks in a specific category queue
    /// 
    /// # Errors
    /// 
    /// Returns `NGTQError` if there was an issue accessing the queue
    fn get_category_queue_len(&self, category: &str) -> Result<usize, NGTQError>;

    /// Push a new task to the id queue - Return queue size after adding the new task
    /// 
    /// # Errors
    /// 
    /// Returns `NGTQError` if id already exist in queue or there was an issue accessing the queue
    fn push_id_task_to_queue(&mut self, payload: String) -> Result<String, NGTQError>;


    /// Push a new task to the category queue
    /// 
    /// # Errors
    /// 
    /// Returns `NGTQError` there was an issue accessing the queue
    fn push_category_task_to_queue(&mut self, category: String, payload: String) -> Result<(), NGTQError>;

    /// Pull a payload from the id queue based on the givin id - Return payload (String)
    /// 
    /// # Errors
    /// 
    /// Returns `NGTQError` if id do not exist in queue or there was an issue accessing the queue
    fn pull_id_task_from_queue(&mut self, id: &str) -> Result<String, NGTQError>;

    /// Pull a payload from the category queue - Return payload (String)
    /// 
    /// # Errors
    /// 
    /// Returns `NGTQError` if queue for this category do not exist or there was an issue accessing the queue
    fn pull_category_task_from_queue(&mut self, category: &str) -> Result<String, NGTQError>;
}

