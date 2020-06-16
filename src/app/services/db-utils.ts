export function convertSnaps<T>(snaps) {
  return <T[]>snaps.map((snap) => {
    return {
      id: snap.payload.doc.id,
      ...snap.payload.doc.data(),
    };
  });
}

// Convert snap converts a single documentsnapshot into a single item of type T
export function convertSnap<T>(snap) {
  // console.log("snap", snap);
  return <T>{
    id: snap.payload.id,
    ...snap.payload.data(),
  };
}
